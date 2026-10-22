import type { Metadata } from "next";
import Link from "next/link";
import { CornerTelemetry } from "@/components/corner-telemetry";
import { getEvents, getProjects } from "@/lib/content";

export const metadata: Metadata = { title: "Home | DoTA" };

export default function Home() {
  const projects = getProjects().filter((project) => project.featured);
  const events = getEvents().filter((event) => event.status === "upcoming");

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8 xl:px-16">
      <CornerTelemetry topLeft="( HOME )" className="mb-16 border-b border-black px-4 pt-16 pb-8 lg:px-6">
        <h1 className="max-w-5xl text-display-lg font-semibold">Department of Technical Arts</h1>
        <p className="mt-6 text-lead text-ink-muted">Landing page team</p>
      </CornerTelemetry>
      <section aria-labelledby="featured-heading" className="mb-16">
        <h2 id="featured-heading" className="mb-8 text-h2 font-semibold">Featured projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.slug} className="border-b border-black">
              <Link href={`/works/${project.slug}`} className="flex min-h-11 items-center justify-between gap-4 py-6 hover:underline">
                <span className="text-h3 font-medium">{project.title}</span>
                <span className="font-mono text-mono-sm uppercase">{project.year}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="upcoming-heading">
        <h2 id="upcoming-heading" className="mb-8 text-h2 font-semibold">Upcoming events</h2>
        <ul>
          {events.map((event, index) => (
            <li key={event.slug} className="flex flex-wrap items-baseline gap-4 border-b border-black py-6">
              <span className="font-mono text-mono-sm uppercase">[{String(index + 1).padStart(2, "0")}]</span>
              <h3 className="min-w-0 flex-1 text-h3 font-medium">{event.title}</h3>
              <time dateTime={event.date} className="font-mono text-mono-sm uppercase">{event.date}</time>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
