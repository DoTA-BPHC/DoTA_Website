import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { CornerTelemetry } from "@/components/corner-telemetry";
import { SplitTextHover } from "@/components/split-text-hover";
import { Tag } from "@/components/tag";

export const metadata: Metadata = {
  title: "UI",
};

const variants = ["primary", "secondary"] as const;
const sizes = ["md", "lg"] as const;
const links = ["WORKS", "EVENTS", "SHOP", "STUDIO", "CONTACT"] as const;

export default function UIPage() {
  return (
    <main className="min-h-screen bg-cream text-black">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="pb-12">
          <p className="mb-4 font-mono text-mono-sm uppercase">( DEV / UI )</p>
          <h1 className="font-sans text-display-lg font-semibold">UI primitives</h1>
        </header>

        <section id="buttons" aria-labelledby="buttons-heading" className="border-t border-black py-12">
          <h2 id="buttons-heading" className="mb-8 font-mono text-mono-sm uppercase">( BUTTONS )</h2>
          <div className="space-y-8">
            {variants.map((variant) => (
              <div key={variant} className="space-y-4">
                <h3 className="font-sans text-h3 font-medium capitalize">{variant}</h3>
                <div className="flex flex-wrap items-center gap-6">
                  {sizes.map((size) => (
                    <div key={size} className="flex flex-wrap items-center gap-6">
                      <Button variant={variant} size={size}>{variant} {size}</Button>
                      <Button variant={variant} size={size} disabled>{variant} {size} disabled</Button>
                    </div>
                  ))}
                  <Button variant={variant} href="#split-text">Link button</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="tags-heading" className="border-t border-black py-12">
          <h2 id="tags-heading" className="mb-8 font-mono text-mono-sm uppercase">( TAGS )</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Tag>Default</Tag>
            <Tag active>Active</Tag>
            <Tag count={24}>With count</Tag>
            <Tag disabled>Disabled</Tag>
          </div>
        </section>

        <section id="split-text" aria-labelledby="split-text-heading" className="border-t border-black py-12">
          <h2 id="split-text-heading" className="mb-8 font-mono text-mono-sm uppercase">( SPLIT TEXT HOVER )</h2>
          <nav aria-label="Preview navigation" className="flex flex-wrap gap-x-8 gap-y-4">
            {links.map((text) => (
              <Link key={text} href={`/${text.toLowerCase()}`} className="group inline-flex min-h-11 items-center font-mono text-mono-md font-medium uppercase">
                <SplitTextHover text={text} />
              </Link>
            ))}
          </nav>
        </section>

        <section aria-labelledby="telemetry-heading" className="border-t border-black py-12">
          <h2 id="telemetry-heading" className="mb-8 font-mono text-mono-sm uppercase">( CORNER TELEMETRY )</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <CornerTelemetry topLeft="[01]" topRight="( ARCHIVE )" bottomLeft="Student works" bottomRight="2026" className="flex min-h-64 items-center justify-center border border-black p-12">
              <h3 className="text-center font-sans text-h2 font-semibold">Living archive</h3>
            </CornerTelemetry>
            <CornerTelemetry topLeft="[02]" topRight="( STUDIO )" bottomLeft="DoTA / Hyderabad" bottomRight="2026" className="flex min-h-64 items-center justify-center border border-black bg-black p-12 text-cream">
              <h3 className="text-center font-sans text-h2 font-semibold">Technical arts</h3>
            </CornerTelemetry>
          </div>
        </section>
      </div>
    </main>
  );
}
