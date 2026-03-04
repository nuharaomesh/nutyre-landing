import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1d4ed8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nutyre.co.uk"),
  title: {
    default: "Emergency Tyre Repair Near You | Fast Mobile Service",
    template: "%s | NuTyre",
  },
  description:
    "Stranded with a flat? Get quick emergency tyre repair from NuTyre. Same-day mobile service across the UK with no hidden costs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          as="image"
          href="/hero.jpg"
          imageSrcSet="/hero.jpg 1200w"
        />
      </head>
      <body
        className={cn(
          inter.variable,
          montserrat.variable,
          "font-sans antialiased bg-white text-slate-900",
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
