import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import HowItWorks from "@/components/sections/HowItWorks";
import FinalCTA from "@/components/sections/FinalCTA";
import { Choice } from "@/components/sections/Choice";
import WhyWait from "@/components/sections/WhyWait";

export const dynamic = "force-static";
export const revalidate = false;

const BASE_URL = "https://www.nutyre.co.uk";
const PAGE_URL = `${BASE_URL}/emergency-tyre-repair`;

export const metadata: Metadata = {
  title: "Emergency Tyre Repair Near You | Fast Mobile Service",
  description:
    "Stranded with a flat? Get quick emergency tyre repair from NuTyre. Same-day mobile service across the UK with no hidden costs.",
  keywords: ["emergency tyre repair"],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Emergency Tyre Repair Near You | Fast Mobile Service",
    description:
      "Stranded with a flat? Get quick emergency tyre repair from NuTyre. Same-day mobile service across the UK with no hidden costs.",
    url: PAGE_URL,
    siteName: "NuTyre",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Emergency Tyre Repair Near You | Fast Mobile Service",
    description:
      "Stranded with a flat? Get quick emergency tyre repair from NuTyre. Same-day mobile service across the UK with no hidden costs.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function EmergencyTyreRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRepair",
        "@id": `${BASE_URL}/#business`,
        name: "NuTyre",
        description:
          "Stranded with a flat? Get quick emergency tyre repair from NuTyre. Same-day mobile service across the UK with no hidden costs.",
        url: BASE_URL,
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Emergency Tyre Repair",
        provider: {
          "@id": `${BASE_URL}/#business`,
        },
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceLocation: {
            "@type": "Country",
            name: "United Kingdom",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Emergency Tyre Repair",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is included in your emergency tyre repair service?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our emergency tyre repair service includes on-site puncture assessment, safe and legal tyre repairs (where possible), and full tyre replacement if needed. Our mobile technicians come to your location fully equipped, so there’s no need to visit a garage.",
            },
          },
          {
            "@type": "Question",
            name: "How quickly can you reach me?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In most cases, we offer same-day emergency tyre repair depending on your location and availability. Once you book, we’ll confirm the earliest possible arrival time and keep you updated.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer roadside emergency tyre repair?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Whether you're stranded at home, work, or on the roadside, our mobile tyre specialists can come directly to you. Just provide your location details when booking.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <Hero />
        <WhyWait />
        <HowItWorks />
        <Choice />
        <FAQ />
        <FinalCTA />
      </article>
    </div>
  );
}
