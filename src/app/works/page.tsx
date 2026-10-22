import type { Metadata } from "next";
import Link from "next/link";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = { title: "Works | DoTA" };

export default function WorksPage() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8 xl:px-16">
      <header className="mb-16 space-y-6">
        <p className="font-mono text-mono-sm uppercase">( WORKS )</p>
        <h1 className="text-display-lg font-semibold">Works</h1>
        <p className="text-lead text-ink-muted">Works page team</p>
      </header>
      <ul>
        {projects.map((project, index) => (
          <li key={project.slug} className="border-b border-black">
            <Link href={`/works/${project.slug}`} className="grid min-h-11 grid-cols-[auto_1fr] items-baseline gap-4 py-6 hover:underline md:grid-cols-[auto_1fr_8rem_auto]">
              <span className="font-mono text-mono-sm uppercase">[{String(index + 1).padStart(2, "0")}]</span>
              <span className="min-w-0 text-h3 font-medium">{project.title}</span>
              <span className="font-mono text-mono-sm uppercase">{project.category}</span>
              <span className="font-mono text-mono-sm uppercase">{project.year}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
