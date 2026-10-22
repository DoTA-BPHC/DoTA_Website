import type { Metadata } from "next";
import { Button } from "@/components/button";

export const metadata: Metadata = { title: "Page not found | DoTA" };

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8 xl:px-16">
      <header className="mb-16 space-y-6">
        <p className="font-mono text-mono-sm uppercase">( 404 )</p>
        <h1 className="text-display-lg font-semibold">Page not found</h1>
        <p className="text-lead text-ink-muted">Layout team</p>
      </header>
      <Button href="/">Back home</Button>
    </div>
  );
}
