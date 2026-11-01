import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// エントリの id は "ja/<slug>" / "en/<slug>" になる
const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  // 画像は src/assets/apps/<slug>/ に置き、Markdown からの相対パスで指定する
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    icon: image().optional(),
    screenshots: z.array(z.object({ src: image(), caption: z.string() })).default([]),
    status: z.enum(['released', 'development']),
    platforms: z.array(z.string()).default([]),
    links: z
      .object({
        web: z.url().optional(),
        appStore: z.url().optional(),
        googlePlay: z.url().optional(),
        github: z.url().optional(),
      })
      .default({}),
    // アプリごとのポリシー類（外部サイトにある場合）
    legal: z
      .object({
        privacy: z.url().optional(),
        terms: z.url().optional(),
        tokushoho: z.url().optional(),
      })
      .default({}),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { apps };
