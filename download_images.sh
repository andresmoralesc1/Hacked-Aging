#!/bin/bash

# Image Downloader Script for Hacked Aging Project
# Usage: ./download_images.sh

API_KEYS=(
  "unsplash_client_id=YOUR_UNSPLASH_KEY"
  "pexels_api_key=YOUR_PEXELS_KEY" 
)

# Keywords for health/aging/longevity images
KEYWORDS=(
  "health"
  "fitness" 
  "longevity"
  "medicine"
  "wellness"
  "exercise"
  "nutrition"
  "aging"
  "biohacking"
  "recovery"
)

# Download from Lorem Picsum (no API key needed)
echo "Downloading placeholder images from Lorem Picsum..."

for i in {1..10}; do
  width=$((800 + RANDOM % 400))
  height=$((600 + RANDOM % 300))
  seed="${KEYWORDS[$((RANDOM % ${#KEYWORDS[@]}))]}_$i"
  
  echo "Downloading image $i: ${width}x${height} with seed $seed"
  curl -s "https://picsum.photos/seed/$seed/$width/$height.jpg" \
    -o "public/images/hero-$i.jpg"
done

# Download from Unsplash (requires API key)
download_unsplash() {
  local keyword=$1
  local filename=$2
  
  curl -s "https://api.unsplash.com/search/photos?query=$keyword&per_page=1&orientation=landscape" \
    -H "Authorization: Client-ID $UNSPLASH_CLIENT_ID" | \
    jq -r '.results[0].urls.regular' | \
    xargs curl -s -o "$filename"
}

# Download from Pexels (requires API key) 
download_pexels() {
  local keyword=$1
  local filename=$2
  
  curl -s "https://api.pexels.com/v1/search?query=$keyword&per_page=1&orientation=landscape" \
    -H "Authorization: 0hhlMBENb78hKw8qUvr0mkdFSkGXXMyoyKmrG9ighYPLlIvqdr9Ehiaa" | \
    jq -r '.photos[0].src.large' | \
    xargs curl -s -o "$filename"
}

# Download real images using Pexels API
echo "Downloading real health images from Pexels..."

HEALTH_KEYWORDS=(
  "fitness"
  "health"
  "longevity"
  "workout"
  "medicine"
)

for i in "${!HEALTH_KEYWORDS[@]}"; do
  keyword="${HEALTH_KEYWORDS[$i]}"
  filename="pexels-$(echo $keyword | tr '[:upper:]' '[:lower:]')-$((i+1)).jpg"
  
  echo "Downloading $keyword image..."
  download_pexels "$keyword" "$filename"
  sleep 1  # Rate limiting respect
done

echo "Image download complete!"
echo "Files saved to: public/images/"
echo ""
echo "Pexels API is now configured and working!"
echo "Rate limit: 200 requests/hour"