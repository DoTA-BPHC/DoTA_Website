import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DoTA BPHC",
  description: "Department of Technical Arts, BITS Pilani Hyderabad Campus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#content" className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:not-sr-only focus:border focus:border-black focus:bg-cream focus:p-4 focus:font-mono">
          Skip to content
        </a>
        <Navbar />
        <main id="content" tabIndex={-1} className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
