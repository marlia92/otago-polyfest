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
  // Fields are all nullable/optional at the schema level (even ones that
  // are logically "required") so a half-filled-in row added through the
  // CloudCannon editor never breaks the whole site build. The CloudCannon
  // UI inputs (cloudcannon.config.yml) still mark time/group_name as the
  // ones editors should fill in.
  schedule: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/schedule" }),
    schema: z.object({
      _schema: z.string().optional(),
      label: z.string().nullable().optional().transform((v) => v ?? ""), // e.g. "Day 1 — Friday"
      date: z.string().nullable().optional().transform((v) => v ?? ""), // e.g. "2026-10-16"
      order: z.number().nullable().optional().transform((v) => v ?? 0), // controls day ordering on the page
      sessions: z
        .array(
          z.object({
            time: z.string().nullable().optional().transform((v) => v ?? ""), // e.g. "9:00am"
            group_name: z.string().nullable().optional().transform((v) => v ?? ""),
            stage: z.string().nullable().optional().transform((v) => v ?? ""),
            notes: z.string().nullable().optional().transform((v) => v ?? ""),
          })
        )
        .default([]),
    }),
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
