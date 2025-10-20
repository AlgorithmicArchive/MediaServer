#!/usr/bin/env bash
# ===========================================================
# Safe Video Converter: MKV → MP4 + Browser-compatible MP4 Fix
# - Handles HEVC/x265 safely using CPU
# - Uses Intel QSV for other formats
# - Ensures H.264 (8-bit) + AAC for browser compatibility
# - Never overwrites originals unless successful
# - Skips unreadable/corrupted files
# ===========================================================

shopt -s globstar nullglob

INPUT_DIR="${1:-.}"
START_TIME=$(date +%s)
COUNT=0
SUCCESS=0
FAILED=0

echo "🔍 Searching for video files in: $INPUT_DIR"
echo "=========================================="

# --- Detect QSV support ---
if ffmpeg -hide_banner -hwaccels | grep -qw qsv; then
    USE_QSV=true
    echo "✅ QSV hardware acceleration available!"
else
    USE_QSV=false
    echo "⚠️  QSV not available, falling back to CPU encoding."
fi
echo ""

# --- Function: check if MP4 is browser compatible ---
is_browser_compatible() {
    local file="$1"
    local vcodec=$(ffprobe -v error -select_streams v:0 -show_entries stream=codec_name -of default=nokey=1:noprint_wrappers=1 "$file")
    local acodec=$(ffprobe -v error -select_streams a:0 -show_entries stream=codec_name -of default=nokey=1:noprint_wrappers=1 "$file")
    local pix_fmt=$(ffprobe -v error -select_streams v:0 -show_entries stream=pix_fmt -of default=nokey=1:noprint_wrappers=1 "$file")
    [[ "$vcodec" == "h264" && "$acodec" == "aac" && "$pix_fmt" == "yuv420p" ]]
}

# --- Main loop ---
for f in "$INPUT_DIR"/**/*.{mkv,mp4}; do
    ((COUNT++))
    BASENAME="${f%.*}"
    EXT="${f##*.}"
    OUT="${BASENAME}.mp4"
    TEMP_OUT="${BASENAME}_tmp.mp4"

    echo ""
    echo "🎬 [$COUNT] Processing: $f"

    # --- Check if file is readable ---
    ffprobe "$f" >/dev/null 2>&1
    if [[ $? -ne 0 ]]; then
        echo "❌ Cannot read file (possibly corrupted): $f"
        ((FAILED++))
        continue
    fi

    # --- Skip already browser-compatible MP4 ---
    if [[ "$EXT" == "mp4" ]] && is_browser_compatible "$f"; then
        echo "⚡ Already browser compatible → skipping conversion"
        ((SUCCESS++))
        continue
    fi

    # --- Get codec info ---
    vcodec=$(ffprobe -v error -select_streams v:0 -show_entries stream=codec_name -of default=nokey=1:noprint_wrappers=1 "$f")
    acodec=$(ffprobe -v error -select_streams a:0 -show_entries stream=codec_name -of default=nokey=1:noprint_wrappers=1 "$f")
    bit_depth=$(ffprobe -v error -select_streams v:0 -show_entries stream=bits_per_raw_sample -of default=nokey=1:noprint_wrappers=1 "$f")
    [[ -z "$bit_depth" ]] && bit_depth=8

    echo "🧠 Detected → Video: $vcodec | Audio: $acodec | Bit depth: $bit_depth"

    # --- Decide: remux or re-encode ---
    if [[ "$vcodec" == "h264" && "$acodec" == "aac" && "$bit_depth" -le 8 ]]; then
        echo "⚡ Remuxing to MP4 (no re-encode)"
        ffmpeg -hide_banner -progress -i "$f" -c copy -movflags +faststart -y "$TEMP_OUT" 2>&1 | \
            grep --line-buffered -E 'frame=|fps=|time=|speed='
    else
        # --- Re-encode ---
        if [[ "$vcodec" == "hevc" ]]; then
            echo "⚠️ HEVC detected → CPU decode (libx264)"
            ffmpeg -hide_banner -progress -i "$f" \
                -c:v libx264 -preset veryfast -crf 23 -pix_fmt yuv420p \
                -c:a aac -b:a 192k -movflags +faststart -y "$TEMP_OUT" 2>&1 | \
                grep --line-buffered -E 'frame=|fps=|time=|speed='
        else
            if [[ "$USE_QSV" == true ]]; then
                echo "🚀 Re-encoding with Intel QSV (H.264 + AAC)"
                ffmpeg -hide_banner -progress -hwaccel qsv -c:v h264_qsv -i "$f" \
                    -c:v h264_qsv -preset veryfast -global_quality 23 -low_power 0 -pix_fmt yuv420p \
                    -c:a aac -b:a 192k -movflags +faststart -y "$TEMP_OUT" 2>&1 | \
                    grep --line-buffered -E 'frame=|fps=|time=|speed='
            else
                echo "🎞️ Re-encoding with CPU (libx264 + AAC)"
                ffmpeg -hide_banner -progress -i "$f" \
                    -c:v libx264 -preset veryfast -crf 23 -pix_fmt yuv420p \
                    -c:a aac -b:a 192k -movflags +faststart -y "$TEMP_OUT" 2>&1 | \
                    grep --line-buffered -E 'frame=|fps=|time=|speed='
            fi
        fi
    fi

    # --- Move temp file to final output only if conversion succeeded ---
    if [[ $? -eq 0 && -f "$TEMP_OUT" ]]; then
        mv "$TEMP_OUT" "$OUT"
        rm -f "$f"
        echo "✅ Success: $OUT"
        echo "🗑️  Deleted original: $f"
        ((SUCCESS++))
    else
        echo "❌ Failed to convert: $f"
        [[ -f "$TEMP_OUT" ]] && rm -f "$TEMP_OUT"
        ((FAILED++))
    fi
done

# --- Summary ---
END_TIME=$(date +%s)
ELAPSED=$((END_TIME - START_TIME))
echo ""
echo "=========================================="
echo "🏁 Conversion complete!"
echo "📦 Total files found: $COUNT"
echo "✅ Successfully converted/fixed: $SUCCESS"
echo "❌ Failed/unreadable: $FAILED"
echo "⏱️ Total time taken: ${ELAPSED}s"
echo "=========================================="
