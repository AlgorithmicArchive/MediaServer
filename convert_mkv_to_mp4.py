import os
import subprocess
import json
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

# Configuration
INPUT_DIR = "D:/Github/MediaServer/wwwroot/Series/Friends/Season 7"
MAX_WORKERS = 4  # Adjust based on CPU cores (e.g., 4 for quad-core)

def get_stream_info(file_path):
    """Get video and audio codec info using ffprobe."""
    cmd = [
        "ffprobe", "-v", "error", "-show_streams",
        "-print_format", "json", file_path
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    return json.loads(result.stdout)

def needs_transcoding(file_path):
    """Check if file needs transcoding (non-H.264, 10-bit, or non-stereo AAC)."""
    try:
        info = get_stream_info(file_path)
        video_stream = next((s for s in info["streams"] if s["codec_type"] == "video"), None)
        audio_stream = next((s for s in info["streams"] if s["codec_type"] == "audio"), None)

        if not video_stream or not audio_stream:
            return True

        video_codec = video_stream.get("codec_name", "")
        pixel_format = video_stream.get("pix_fmt", "")
        audio_codec = audio_stream.get("codec_name", "")
        audio_channels = audio_stream.get("channels", 0)

        return (
            video_codec != "h264" or
            pixel_format == "yuv420p10le" or
            audio_codec != "aac" or
            audio_channels > 2
        )
    except Exception as e:
        print(f"Error checking {file_path}: {e}")
        return True

def convert_file(file_path):
    """Convert a single file to compatible MP4, overwriting original."""
    temp_file = os.path.join(os.path.dirname(file_path), f"temp_{Path(file_path).name}")

    if needs_transcoding(file_path):
        print(f"Transcoding {file_path}...")
        cmd = [
            "ffmpeg", "-i", file_path,
            "-c:v", "libx264", "-profile:v", "high", "-level", "4.2", "-pix_fmt", "yuv420p",
            "-preset", "ultrafast", "-crf", "23",
            "-c:a", "aac", "-ac", "2", "-b:a", "128k",
            "-movflags", "+faststart",
            "-y", temp_file
        ]
    else:
        print(f"Copying {file_path} (already compatible)...")
        cmd = [
            "ffmpeg", "-i", file_path,
            "-c:v", "copy", "-c:a", "copy",
            "-movflags", "+faststart",
            "-y", temp_file
        ]

    try:
        subprocess.run(cmd, check=True, capture_output=True, text=True)
        os.replace(temp_file, file_path)  # Replace original with converted
        return file_path
    except subprocess.CalledProcessError as e:
        print(f"Error converting {file_path}: {e.stderr}")
        if os.path.exists(temp_file):
            os.remove(temp_file)
        return None

def main():
    files = [
        os.path.join(INPUT_DIR, f) for f in os.listdir(INPUT_DIR)
        if f.lower().endswith((".mkv", ".mp4"))
    ]

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        results = executor.map(convert_file, files)
        converted_files = [r for r in results if r]

    print(f"Conversion complete. {len(converted_files)} files processed.")

if __name__ == "__main__":
    main()
