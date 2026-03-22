import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const dirs = [
  'public/image/events/10_commandments',
  'public/image/events/Dasa',
  'public/image/events/the_republic'
];

async function processDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDir(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      try {
        const metadata = await sharp(fullPath).metadata();
        const tmpPath = fullPath + '.tmp';
        let s = sharp(fullPath);
        
        // Resize down to 1920px max on either side avoiding upscaling
        if (metadata.width > 1920 || metadata.height > 1920) {
          s = s.resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true });
        }
        
        // Lossy compress at 80% quality
        if (/\.png$/i.test(entry.name)) {
          s = s.png({ quality: 80, compressionLevel: 9 });
        } else {
          s = s.jpeg({ quality: 80, mozjpeg: true });
        }
        
        await s.toFile(tmpPath);
        
        const origStat = await fs.stat(fullPath);
        const newStat = await fs.stat(tmpPath);
        
        if (newStat.size < origStat.size) {
          await fs.rename(tmpPath, fullPath);
          console.log(`✓ Compressed ${fullPath}: ${(origStat.size/1024/1024).toFixed(2)}MB -> ${(newStat.size/1024/1024).toFixed(2)}MB`);
        } else {
          await fs.unlink(tmpPath);
          console.log(`- Skipped ${fullPath}: Already highly compressed`);
        }
      } catch (err) {
        console.error(`✗ Error processing ${fullPath}:`, err.message);
      }
    }
  }
}

async function main() {
  for (const dir of dirs) {
    console.log(`\nProcessing ${dir}...`);
    try {
      await processDir(dir);
    } catch (e) {
      console.log(`Directory ${dir} not found or skipped.`)
    }
  }
  console.log('\nDone compressing all directories!');
}
main();
