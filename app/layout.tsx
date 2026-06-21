import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

// Humanist sans for body + UI
const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

// Transitional serif for display — stands in for licensed Tiempos Headline
const display = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-display",
});

const SITE_URL = "https://ssairlines.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "South Sudan Airlines — The Pride of the New Nation",
    template: "%s · South Sudan Airlines",
  },
  description:
    "The national flag carrier of the Republic of South Sudan. Daily flights from Juba to Malakal, Wau, Bentiu and Nairobi — built to international standards.",
  keywords: [
    "South Sudan Airlines",
    "Juba flights",
    "fly Juba",
    "South Sudan flag carrier",
    "Nairobi Juba flights",
  ],
  openGraph: {
    type: "website",
    siteName: "South Sudan Airlines",
    title: "South Sudan Airlines — The Pride of the New Nation",
    description:
      "Daily flights from Juba to Malakal, Wau, Bentiu and Nairobi. Built to the standards of international aviation, by South Sudanese, for South Sudan.",
    url: SITE_URL,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "South Sudan Airlines",
    description: "The Pride of the New Nation. Daily flights from Juba.",
  },
  icons: {
    icon: [{ url: "/star.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: SITE_URL,
    languages: { en: "/en", ar: "/ar" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A4F75",
  width: "device-width",
  initialScale: 1,
};

// Airline structured data (brief §7 — SEO)
const airlineJsonLd = {
  "@context": "https://schema.org",
  "@type": "Airline",
  name: "South Sudan Airlines",
  alternateName: "SSA",
  url: SITE_URL,
  iataCode: "",
  slogan: "The Pride of the New Nation",
  areaServed: "South Sudan and East Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${body.variable} ${display.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-nile focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(airlineJsonLd) }}
        />
      </body>
    </html>
  );
}
