const Jimp = require('jimp');

async function makeFavicon() {
  try {
    const image = await Jimp.read('public/image/logo.png');
    
    // Autocrop transparent borders first to get true bounds
    image.autocrop();
    
    // We crop a square from the left edge assuming the graphical logo is on the left
    const size = image.bitmap.height;
    image.crop(0, 0, size, size);
    
    // Autocrop again to tighten exactly around the icon
    image.autocrop();
    
    await image.writeAsync('src/app/icon.png');
    console.log("Success! Created transparent icon.png");
  } catch (err) {
    console.error("Error generating favicon:", err);
  }
}

makeFavicon();
