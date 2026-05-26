// src/utils/convert-images.mjs
import sharp from "sharp";
import { readdirSync } from "fs";
import { join, basename } from "path";

const ASSETS_DIR = "src/assets";

// Kuhanin ang lahat ng .png files sa assets folder
const pngFiles = readdirSync(ASSETS_DIR)
  .filter(file => file.endsWith(".png"));

for (const file of pngFiles) {
  const input = join(ASSETS_DIR, file);
  const output = join(ASSETS_DIR, file.replace(".png", ".webp"));

  await sharp(input).webp({ quality: 85 }).toFile(output);
  console.log(`✅ ${input} → ${output}`);
}

console.log(`\n🎉 Done! Converted ${pngFiles.length} images.`);