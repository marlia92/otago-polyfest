import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  pages: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  }),

  // News / updates in the run-up to and after the festival.
  blog: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  }),

  // Multi-day performance schedule. One file per day; each day holds an
  // ordered list of timed sessions (time + group name + optional stage/notes).
  schedule: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/schedule" }),
    schema: z.object({
      _schema: z.string().optional(),
      label: z.string(), // e.g. "Day 1 — Friday"
      date: z.string(), // e.g. "2026-10-16"
      order: z.number().default(0), // controls day ordering on the page
      sessions: z
        .array(
          z.object({
            time: z.string(), // e.g. "9:00am"
            group_name: z.string(),
            stage: z.string().optional(),
            notes: z.string().optional(),
          })
        )
        .default([]),
    }),
  }),

  team: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  }),

  "docs-pages": defineCollection({
    loader: glob({
      pattern: "**/*.md",
      base: "./src/component-library/content/pages",
    }),
  }),

  "docs-components": defineCollection({
    loader: glob({
      pattern: "**/*.md",
      base: "./src/component-library/content/components",
    }),
  }),
};
