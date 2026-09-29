import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { env } from "@/env";

import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: { default: "Web Starter", template: "%s | Web Starter" },
  description: "WebMDT starter template for custom web projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-white font-sans text-zinc-900 antialiased">{children}</body>
    </html>
  );
}
