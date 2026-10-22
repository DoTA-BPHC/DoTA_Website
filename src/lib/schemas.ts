import { z } from "zod";

export const categories = ["workshop", "project", "event", "design", "tech"] as const;
export type Category = (typeof categories)[number];

const slugSchema = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug");

export const projectSchema = z.object({
  slug: slugSchema,
  title: z.string().min(1, "Title is required"),
  summary: z.string().min(1, "Summary is required").max(160),
  category: z.enum(categories),
  year: z.number().int().min(2015).max(2030),
  featured: z.boolean(),
  cover: z.string().regex(/^\/images\/(?:[\w-]+\/)*[\w-]+(?:\.[\w-]+)*$/, "Invalid image path"),
  images: z.array(z.string()).default([]),
  people: z.array(slugSchema),
  tools: z.array(z.string()),
  capabilities: z.array(z.string()).length(3),
});

export const personSchema = z.object({
  slug: slugSchema,
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  team: z.enum(["core", "web", "design", "3d", "video"]),
  photo: z.string().optional(),
  instagram: z.url().optional(),
});

export const eventSchema = z.object({
  slug: slugSchema,
  title: z.string().min(1, "Title is required"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date"),
  venue: z.string().min(1, "Venue is required"),
  summary: z.string().min(1, "Summary is required"),
  status: z.enum(["upcoming", "past"]),
  link: z.url().optional(),
});

export const productSchema = z.object({
  slug: slugSchema,
  name: z.string().min(1, "Name is required"),
  priceINR: z.number().int().positive(),
  status: z.enum(["in-stock", "pre-order", "sold-out"]),
  sizes: z.array(z.string()),
  images: z.array(z.string()).nonempty(),
  details: z.array(z.string()),
  orderUrl: z.url(),
});

export const projectsSchema = z.array(projectSchema);
export const peopleSchema = z.array(personSchema);
export const eventsSchema = z.array(eventSchema);
export const productsSchema = z.array(productSchema);

export type Project = z.infer<typeof projectSchema>;
export type Person = z.infer<typeof personSchema>;
export type Event = z.infer<typeof eventSchema>;
export type Product = z.infer<typeof productSchema>;
