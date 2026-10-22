import projects from "@/content/projects.json";
import people from "@/content/people.json";
import events from "@/content/events.json";
import products from "@/content/products.json";
import { projectsSchema, peopleSchema, eventsSchema, productsSchema } from "@/lib/schemas";

export function getProjects() {
  return projectsSchema.parse(projects);
}

export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug);
}

export function getPeople() {
  return peopleSchema.parse(people);
}

export function getEvents() {
  return eventsSchema.parse(events);
}

export function getProducts() {
  return productsSchema.parse(products);
}
