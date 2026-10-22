import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/content";

export const metadata: Metadata = { title: "Project | DoTA" };

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8 xl:px-16">
      <header className="mb-16 space-y-6">
        <p className="font-mono text-mono-sm uppercase">( WORKS / PROJECT )</p>
        <h1 className="text-display-lg font-semibold">{project.title}</h1>
        <p className="text-lead text-ink-muted">Works page team</p>
        <p className="max-w-3xl text-lead">{project.summary}</p>
      </header>
      <dl>
        <div className="grid gap-4 border-b border-black py-6 md:grid-cols-3">
          <dt className="font-mono text-mono-sm uppercase">Year</dt>
          <dd className="font-mono text-mono-sm uppercase md:col-span-2">{project.year}</dd>
        </div>
        <div className="grid gap-4 border-b border-black py-6 md:grid-cols-3">
          <dt className="font-mono text-mono-sm uppercase">Category</dt>
          <dd className="font-mono text-mono-sm uppercase md:col-span-2">{project.category}</dd>
        </div>
        <div className="grid gap-4 border-b border-black py-6 md:grid-cols-3">
          <dt className="font-mono text-mono-sm uppercase">Tools</dt>
          <dd className="md:col-span-2"><ul className="flex flex-wrap gap-4">{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></dd>
        </div>
        <div className="grid gap-4 border-b border-black py-6 md:grid-cols-3">
          <dt className="font-mono text-mono-sm uppercase">Capabilities</dt>
          <dd className="md:col-span-2"><ul className="flex flex-wrap gap-4 font-mono text-mono-sm uppercase">{project.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul></dd>
        </div>
      </dl>
    </div>
  );
}
