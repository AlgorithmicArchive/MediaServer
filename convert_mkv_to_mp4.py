import os
import subprocess
import sys
from pathlib import Path
from concurrent.futures import ProcessPoolExecutor, as_completed
import json
import logging
import time

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.StreamHandler()]
)
logger = logging.getLogger(__name__)

def check_ffmpeg():
    """Check if FFmpeg and ffprobe are installed."""
    try:
        subprocess.run(["ffmpeg", "-version"], capture_output=True, check=True)
        subprocess.run(["ffprobe", "-version"], capture_output=True, check=True)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        logger.error("FFmpeg or ffprobe not found. Please install them.")
        return False

def get_codecs(file_path):
    """Get video and audio codecs of a file using ffprobe."""
    cmd = [
        "ffprobe",
        "-v", "error",
        "-show_entries", "stream=codec_name,codec_type",
        "-of", "json",
        str(file_path)
    ]
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        data = json.loads(result.stdout)
        video_codec = None
        audio_codec = None
        for stream in data.get("streams", []):
            if stream["codec_type"] == "video" and video_codec is None:
                video_codec = stream["codec_name"]
            elif stream["codec_type"] == "audio":
                if stream["codec_name"] == "aac":
                    audio_codec = stream["codec_name"]
                    break  # Prefer AAC if available
                elif audio_codec is None:
                    audio_codec = stream["codec_name"]
        return video_codec, audio_codec
    except (subprocess.CalledProcessError, json.JSONDecodeError) as e:
        logger.error(f"Failed to get codecs for {file_path}: {e}")
        return None, None

def convert_file(mkv_path):
    """Convert a single MKV file to MP4 and return success status."""
    mp4_path = Path(mkv_path).with_suffix(".mp4")
    logger.info(f"Converting: {mkv_path}")

    # Get codecs to decide if copying is possible
    video_codec, audio_codec = get_codecs(mkv_path)
    can_copy = video_codec == "h264" and audio_codec == "aac"

    # Build FFmpeg command
    cmd = [
        "ffmpeg",
        "-i", str(mkv_path),
        "-f", "mp4",
        "-movflags", "faststart",  # Optimize for streaming
        "-fflags", "+fastseek",  # Faster seeking
        "-map_metadata", "-1",  # Remove metadata
        "-threads", "0",  # Auto-detect threads
        "-y"  # Overwrite output if exists
    ]
    
    if can_copy:
        cmd.extend(["-c:v", "copy", "-c:a", "copy", "-bsf:v", "h264_mp4toannexb"])
    else:
        cmd.extend([
            "-c:v", "libx264",  # Transcode to H.264
            "-preset", "ultrafast",  # Fast encoding
            "-c:a", "aac",  # Transcode to AAC
            "-b:a", "192k"
        ])
    
    cmd.extend([
        "-map", "0:v:0",  # Map first video stream
        "-map", "0:a:0?",  # Map first audio stream (optional)
        "-map", "-0:s"  # Exclude subtitles
    ])
    cmd.append(str(mp4_path))

    # Run FFmpeg
    try:
        result = subprocess.run(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            check=True
        )
        if mp4_path.exists():
            logger.info(f"Successfully converted: {mp4_path}")
            try:
                os.remove(mkv_path)
                logger.info(f"Deleted original: {mkv_path}")
                return True
            except Exception as e:
                logger.warning(f"Could not delete original MKV: {e}")
                return True
        else:
            logger.error(f"Output file not created: {mp4_path}")
            logger.error(result.stderr)
            return False
    except subprocess.CalledProcessError as e:
        logger.error(f"Failed to convert {mkv_path}: {e}")
        logger.error(e.stderr)
        return False

def convert_mkv_to_mp4(root_folder, max_workers=None):
    """
    Converts all .mkv files in the given folder (recursively) to .mp4.
    Uses FFmpeg with codec copying when possible and parallel processing.
    Reports total files converted and time taken.
    """
    if not check_ffmpeg():
        sys.exit(1)

    root_path = Path(root_folder)
    if not root_path.exists():
        logger.error(f"Folder not found: {root_folder}")
        sys.exit(1)

    mkv_files = list(root_path.rglob("*.mkv"))
    if not mkv_files:
        logger.info("No MKV files found.")
        return

    logger.info(f"Found {len(mkv_files)} MKV files to convert.")

    # Set max_workers to CPU count if not specified
    max_workers = max_workers or os.cpu_count() or 4

    # Track successful conversions and start time
    successful_conversions = 0
    start_time = time.time()

    # Process files in parallel
    with ProcessPoolExecutor(max_workers=max_workers) as executor:
        future_to_file = {executor.submit(convert_file, mkv): mkv for mkv in mkv_files}
        for future in as_completed(future_to_file):
            mkv = future_to_file[future]
            try:
                if future.result():
                    successful_conversions += 1
            except Exception as e:
                logger.error(f"Error processing {mkv}: {e}")

    # Calculate total time taken
    total_time = time.time() - start_time

    # Log summary
    logger.info("Conversion Summary:")
    logger.info(f"Total files found: {len(mkv_files)}")
    logger.info(f"Total files successfully converted: {successful_conversions}")
    logger.info(f"Total time taken: {total_time:.2f} seconds")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        logger.error("Usage: python convert_mkv_to_mp4.py <folder_path>")
        sys.exit(1)

    folder = sys.argv[1]
    convert_mkv_to_mp4(folder)