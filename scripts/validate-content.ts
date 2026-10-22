import { readFileSync } from "node:fs";
import { z } from "zod";
import { projectsSchema, peopleSchema, eventsSchema, productsSchema } from "../src/lib/schemas";

function readContent<T extends z.ZodType>(file: string, schema: T): z.output<T> {
  try {
    const data: unknown = JSON.parse(readFileSync(new URL(`../src/content/${file}.json`, import.meta.url), "utf8"));
    return schema.parse(data);
  } catch (error) {
    throw new Error(`${file}.json: ${error instanceof Error ? error.message : String(error)}`);
  }
}

function checkSlugs(file: string, entries: { slug: string }[]) {
  const slugs = new Set<string>();

  for (const entry of entries) {
    if (slugs.has(entry.slug)) {
      throw new Error(`${file}.json: Duplicate slug "${entry.slug}"`);
    }
    slugs.add(entry.slug);
  }
}

try {
  const projects = readContent("projects", projectsSchema);
  const people = readContent("people", peopleSchema);
  const events = readContent("events", eventsSchema);
  const products = readContent("products", productsSchema);

  checkSlugs("projects", projects);
  checkSlugs("people", people);
  checkSlugs("events", events);
  checkSlugs("products", products);

  const peopleSlugs = new Set(people.map((person) => person.slug));

  for (const project of projects) {
    for (const person of project.people) {
      if (!peopleSlugs.has(person)) {
        throw new Error(`projects.json: Unknown person "${person}" in "${project.slug}"`);
      }
    }
  }

  console.log("content ok");
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
