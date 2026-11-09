// og 画像（SNS で共有したときのカード画像）を scripts/og/*.svg から public/og/*.png に書き出す。
// 文字は実行した PC のフォントで描かれるので、書き出した PNG を目で確かめてからコミットする。
import { mkdir, readdir } from 'node:fs/promises';
import sharp from 'sharp';

const src = new URL('./og/', import.meta.url);
const out = new URL('../public/og/', import.meta.url);

await mkdir(out, { recursive: true });
for (const file of await readdir(src)) {
  if (!file.endsWith('.svg')) continue;
  const dest = new URL(file.replace(/\.svg$/, '.png'), out);
  await sharp(new URL(file, src).pathname).png({ compressionLevel: 9 }).toFile(dest.pathname);
  console.log(`public/og/${file.replace(/\.svg$/, '.png')}`);
}
