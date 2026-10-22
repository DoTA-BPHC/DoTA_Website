import type { Metadata } from "next";
import { getEvents } from "@/lib/content";

export const metadata: Metadata = { title: "Events | DoTA" };

const statuses = ["upcoming", "past"] as const;

export default function EventsPage() {
  const events = getEvents();

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8 xl:px-16">
      <header className="mb-16 space-y-6">
        <p className="font-mono text-mono-sm uppercase">( EVENTS )</p>
        <h1 className="text-display-lg font-semibold">Events</h1>
        <p className="text-lead text-ink-muted">Events page team</p>
      </header>
      {statuses.map((status) => (
        <section key={status} aria-labelledby={`${status}-heading`} className="mb-16 last:mb-0">
          <h2 id={`${status}-heading`} className="mb-8 text-h2 font-semibold">{status === "upcoming" ? "Upcoming events" : "Past events"}</h2>
          <ul>
            {events.filter((event) => event.status === status).map((event, index) => (
              <li key={event.slug} className="space-y-4 border-b border-black py-6">
                <div className="flex flex-wrap items-baseline gap-4">
                  <span className="font-mono text-mono-sm uppercase">[{String(index + 1).padStart(2, "0")}]</span>
                  <h3 className="min-w-0 flex-1 text-h3 font-medium">{event.title}</h3>
                  <time dateTime={event.date} className="font-mono text-mono-sm uppercase">{event.date}</time>
                </div>
                <p>{event.venue}</p>
                <p className="max-w-3xl text-ink-muted">{event.summary}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
