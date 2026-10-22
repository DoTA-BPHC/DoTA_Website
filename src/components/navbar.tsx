"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SplitTextHover } from "@/components/split-text-hover";

const links = [
  { href: "/works", label: "WORKS" },
  { href: "/events", label: "EVENTS" },
  { href: "/shop", label: "SHOP" },
  { href: "/studio", label: "STUDIO" },
  { href: "/contact", label: "CONTACT" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButton.current?.focus();
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 border-b border-black bg-[rgb(245_245_220_/_0.88)] backdrop-blur-[12px]">
      <nav aria-label="Main navigation" className="mx-auto flex h-full max-w-[1600px] items-center justify-between gap-4 px-4 md:grid md:grid-cols-[1fr_auto_1fr] md:px-6 lg:px-8 xl:px-16">
        <div className="flex items-center gap-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="inline-flex min-h-11 min-w-11 items-center font-sans text-2xl font-bold">
            DoTA
          </Link>
          <span className="hidden font-mono text-mono-xs uppercase md:block">HYD / 17.5449° N</span>
        </div>
        <ul className="hidden items-center justify-center gap-4 md:flex lg:gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} aria-current={isActive(href) ? "page" : undefined} className="group flex min-h-11 items-center gap-2 font-mono text-mono-sm uppercase">
                {isActive(href) && <span aria-hidden="true" className="size-1.5 shrink-0 bg-red" />}
                <SplitTextHover text={label} />
              </Link>
            </li>
          ))}
        </ul>
        <button ref={menuButton} type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="min-h-11 min-w-11 cursor-pointer font-mono text-mono-sm uppercase md:hidden">
          MENU
        </button>
      </nav>
      <div id="mobile-navigation" hidden={!menuOpen} className="absolute inset-x-0 top-full max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-b border-black bg-cream px-4 md:hidden">
        <ul>
          {links.map(({ href, label }) => (
            <li key={href} className="border-b border-black last:border-b-0">
              <Link href={href} aria-current={isActive(href) ? "page" : undefined} onClick={() => setMenuOpen(false)} className="group flex min-h-11 items-center gap-2 py-4 font-mono text-mono-sm uppercase">
                {isActive(href) && <span aria-hidden="true" className="size-1.5 shrink-0 bg-red" />}
                <SplitTextHover text={label} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
