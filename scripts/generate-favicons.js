// Script to generate tooth icon HTML that can be saved as PNG
// Open this in a browser and use screenshot tools to capture the icons

const sizes = [
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'web-app-manifest-192x192.png', size: 192 },
  { name: 'web-app-manifest-512x512.png', size: 512 }
];

console.log('To generate favicons:');
console.log('1. Open the SVG file public/favicon.svg in a browser or design tool');
console.log('2. Export/screenshot at the following sizes:');
sizes.forEach(({ name, size }) => {
  console.log(`   - ${name}: ${size}x${size}px`);
});
console.log('\nOr use an online tool like:');
console.log('- https://realfavicongenerator.net/');
console.log('- https://favicon.io/');
console.log('\nUpload the public/favicon.svg file and download the generated PNGs.');
