import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const optionalUrl = z.url().optional().or(z.literal(''));

const games = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/games' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['concept', 'development', 'demo', 'released', 'paused']),
    shortDescription: z.string(),
    heroImageLight: z.string().optional(),
    heroImageDark: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    trailerUrl: optionalUrl,
    storeUrl: optionalUrl,
    platforms: z.array(z.string()).default([]),
    releaseDateOrWindow: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    sortOrder: z.number().default(100),
    accent: z.string().optional(),
    pressKitUrl: optionalUrl,
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    relatedGame: z.string().optional(),
  }),
});

export const collections = { games, news };
