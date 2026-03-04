"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: "1. What is included in your emergency tyre repair service?",
      a: "Our emergency tyre repair service includes on-site puncture assessment, safe and legal tyre repairs (where possible), and full tyre replacement if needed. Our mobile technicians come to your location fully equipped, so there’s no need to visit a garage.",
    },
    {
      q: "2. How quickly can you reach me?",
      a: "In most cases, we offer same-day emergency tyre repair depending on your location and availability. Once you book, we’ll confirm the earliest possible arrival time and keep you updated.",
    },
    {
      q: "3. Do you offer roadside emergency tyre repair?",
      a: "Yes. Whether you're stranded at home, work, or on the roadside, our mobile tyre specialists can come directly to you. Just provide your location details when booking.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-slate-50 border-y border-slate-200 scroll-mt-20"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span className="text-xl font-black text-slate-900 pr-8 group-hover:text-blue-700 transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  className={cn(
                    "w-6 h-6 text-slate-400 transition-transform duration-300 shrink-0",
                    openIndex === idx && "rotate-180 text-blue-600",
                  )}
                />
              </button>

              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                className={cn(
                  "grid transition-all duration-300 ease-in-out px-6 md:px-8",
                  openIndex === idx
                    ? "grid-rows-[1fr] opacity-100 pb-8"
                    : "grid-rows-[0fr] opacity-0 pb-0",
                )}
              >
                <div className="overflow-hidden text-slate-600 leading-relaxed text-lg italic md:not-italic">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
