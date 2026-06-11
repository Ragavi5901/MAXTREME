const sharp = require('sharp');

async function makeFavicon() {
  try {
    const metadata = await sharp('public/image/logo.png').metadata();
    console.log(`Image dimensions: ${metadata.width}x${metadata.height}`);
    
    // Safely determine the size of the square
    const size = Math.min(metadata.width, metadata.height);
    
    await sharp('public/image/logo.png')
      .extract({ left: 0, top: 0, width: size, height: size })
      .trim() // Trim transparent edges
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFile('src/app/icon.png');
      
    console.log("Success! Created transparent icon.png using sharp");
  } catch (err) {
    console.error("Error generating favicon:", err);
  }
}

makeFavicon();
