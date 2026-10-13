import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 每本书一个 Markdown 文件，放在 src/content/books/{zh-Hant,en}/ 下。
// 中英文版本使用相同的文件名（slug），语言切换时可互相对应。
const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string().optional(),
    publisher: z.string().optional(), // 出版方，缺省视为本社
    isbn: z.string().optional(),
    format: z.string().optional(), // 平裝 / 精裝 / Paperback / Hardback
    cover: z.string(), // public/ 下的相对路径，如 covers/xxx.svg
    buyLink: z.string().url().optional(),
    lang: z.enum(['zh-Hant', 'en']),
    featured: z.boolean().default(false),
    publishDate: z.string().optional(),
  }),
});

export const collections = { books };
