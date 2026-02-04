/**
 * Generate icon-192.png and icon-512.png for PWA manifest
 * These are simple placeholder icons - replace with actual logo when available
 */

const generateIcon = (size: number) => {
  // Create a simple SVG
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#7c5c3a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#a87c50;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" rx="${size * 0.1}" fill="url(#grad)"/>
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="white"
        font-size="${size * 0.4}"
        font-weight="bold"
        font-family="sans-serif"
      >BB</text>
    </svg>
  `
  return svg
}

// For now, we'll create SVG files as placeholders
// In production, these would be converted to PNG
console.log("Icon generation script created.")
console.log("Note: For production, use a proper image tool to convert SVG to PNG.")
console.log("Recommended: Use https://realfavicongenerator.net or ImageMagick")
