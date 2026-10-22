import type { Metadata } from "next";
import { getPeople } from "@/lib/content";

export const metadata: Metadata = { title: "Studio | DoTA" };

export default function StudioPage() {
  const people = getPeople();
  const teams = [...new Set(people.map((person) => person.team))];

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8 xl:px-16">
      <header className="mb-16 space-y-6">
        <p className="font-mono text-mono-sm uppercase">( STUDIO )</p>
        <h1 className="text-display-lg font-semibold">Studio</h1>
        <p className="text-lead text-ink-muted">Studio page team</p>
      </header>
      {teams.map((team) => (
        <section key={team} aria-labelledby={`${team}-heading`} className="mb-16 last:mb-0">
          <h2 id={`${team}-heading`} className="mb-8 text-h2 font-semibold uppercase">{team}</h2>
          <ul>
            {people.filter((person) => person.team === team).map((person) => (
              <li key={person.slug} className="grid gap-4 border-b border-black py-6 md:grid-cols-2">
                <h3 className="text-h3 font-medium">{person.name}</h3>
                <p className="text-ink-muted">{person.role}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
