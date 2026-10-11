import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/archivo/wdth-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huzaifa Shahid | Full-Stack, Mobile & AI Engineer",
  description:
    "Huzaifa Shahid is a software engineer in Karachi building full-stack web apps, iOS and Android apps, and AI-powered products.",
  metadataBase: new URL("https://huzaifashahid.online"),
  openGraph: {
    title: "Huzaifa Shahid | Full-Stack, Mobile & AI Engineer",
    description: "Web apps, iOS and Android apps, and AI features that businesses rely on every day.",
    url: "https://huzaifashahid.online",
    images: ["/img/huzaifa.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f2f2ef",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
