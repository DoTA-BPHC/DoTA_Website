import Link from "next/link";
import { IstClock } from "@/components/ist-clock";

const links = ["works", "events", "shop", "studio", "contact"] as const;

export function Footer() {
  return (
    <footer className="bg-black py-16 text-cream">
      <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-8 xl:px-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6 lg:col-span-2">
            <p className="max-w-lg text-lead">Department of Technical Arts, BITS Pilani Hyderabad Campus. We build things with code, light, sound and metal.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-mono-xs uppercase">
              <span>HYDERABAD / UTC+5:30</span>
              <IstClock />
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <ul>
              {links.map((link, index) => (
                <li key={link}>
                  <Link href={`/${link}`} className="inline-flex min-h-11 items-center font-mono text-mono-sm uppercase hover:text-teal">
                    [{String(index + 1).padStart(2, "0")}] {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul>
            <li><a href="https://www.instagram.com/dota_bphc/" className="inline-flex min-h-11 items-center font-mono text-mono-sm uppercase hover:text-teal">INSTAGRAM</a></li>
            <li><a href="https://github.com/DoTA-BPHC" className="inline-flex min-h-11 items-center font-mono text-mono-sm uppercase hover:text-teal">GITHUB</a></li>
            <li><a href="mailto:dota@hyderabad.bits-pilani.ac.in" className="inline-flex min-h-11 items-center font-mono text-mono-sm uppercase hover:text-teal">EMAIL</a></li>
          </ul>
        </div>
        <p className="mt-16 w-full font-sans text-display-xl font-bold">DoTA</p>
        <p className="mt-8 font-mono text-mono-xs uppercase">© 2026 DEPARTMENT OF TECHNICAL ARTS</p>
      </div>
    </footer>
  );
}
