import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact | DoTA" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8 xl:px-16">
      <header className="mb-16 space-y-6">
        <p className="font-mono text-mono-sm uppercase">( CONTACT )</p>
        <h1 className="text-display-lg font-semibold">Contact</h1>
        <p className="text-lead text-ink-muted">Contact page team</p>
      </header>
      <dl>
        <div className="space-y-6 border-b border-black py-8">
          <dt className="font-mono text-mono-sm uppercase">[01 / EMAIL]</dt>
          <dd><a href="mailto:dota@hyderabad.bits-pilani.ac.in" className="inline-block min-h-11 max-w-full text-h2 font-semibold break-words hover:underline">dota@hyderabad.bits-pilani.ac.in</a></dd>
        </div>
        <div className="space-y-6 border-b border-black py-8">
          <dt className="font-mono text-mono-sm uppercase">[02 / ADDRESS]</dt>
          <dd><address className="max-w-2xl text-lead not-italic">BITS Pilani, Hyderabad Campus, Jawahar Nagar, Kapra Mandal, Medchal District, Telangana 500078</address></dd>
        </div>
        <div className="space-y-6 border-b border-black py-8">
          <dt className="font-mono text-mono-sm uppercase">[03 / INSTAGRAM]</dt>
          <dd><a href="https://www.instagram.com/dota_bphc/" className="inline-flex min-h-11 items-center font-mono text-mono-sm uppercase hover:underline">@DOTA_BPHC</a></dd>
        </div>
      </dl>
    </div>
  );
}
