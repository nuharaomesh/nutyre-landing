"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function HowItWorks() {
  // Logic to track active state for progress line and card highlights
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    "Tell us what’s happened and where you are",
    "We’ll check if a repair is safe and legal",
    "If not, we’ll fit a new tyre on-site",
    "You’re back on the move, no garage visit needed",
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-slate-950 text-white scroll-mt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl relative">
        <h2 className="font-display text-3xl md:text-5xl font-black mb-20 text-center tracking-tight">
          How It Works <br /> Simple and Stress-Free
        </h2>

        <div className="relative flex flex-col md:flex-row gap-8 items-start">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-slate-800 z-0">
            <div
              className="h-full bg-blue-500 transition-all duration-700 ease-in-out shadow-[0_0_15px_rgba(59,130,246,0.6)]"
              style={{ width: `${(activeIndex / (steps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="md:hidden absolute left-12 top-0 bottom-0 w-0.5 bg-slate-800 z-0">
            <div
              className="w-full bg-blue-500 transition-all duration-700 ease-in-out shadow-[0_0_15px_rgba(59,130,246,0.6)]"
              style={{ height: `${(activeIndex / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {steps.map((step, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "relative z-10 flex-1 w-full group cursor-pointer transition-all duration-500",
                activeIndex === idx
                  ? "scale-105"
                  : "scale-100 opacity-80 md:opacity-100",
              )}
            >
              <div
                className={cn(
                  "p-8 rounded-[2rem] border transition-all duration-500 h-full flex flex-col items-start md:items-center text-left md:text-center gap-6",
                  "backdrop-blur-xl bg-slate-900/40",
                  activeIndex === idx
                    ? "border-blue-500 shadow-[0_20px_50px_-20px_rgba(59,130,246,0.3)] bg-slate-800/80"
                    : "border-slate-800 hover:border-slate-700 bg-slate-900/20",
                )}
              >
                <div
                  className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black transition-all duration-700",
                    activeIndex === idx
                      ? "bg-blue-600 text-white rotate-12 shadow-[0_0_25px_rgba(37,99,235,0.5)] scale-110"
                      : "bg-slate-800 text-slate-500 group-hover:text-slate-300",
                  )}
                >
                  {idx + 1}
                </div>

                <p
                  className={cn(
                    "text-xl font-bold leading-snug transition-colors duration-500",
                    activeIndex === idx ? "text-white" : "text-slate-400",
                  )}
                >
                  {step}
                </p>

                <div
                  className={cn(
                    "absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none transition-opacity duration-500",
                    activeIndex === idx ? "opacity-100" : "opacity-0",
                  )}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-20 text-2xl font-bold text-blue-400 italic animate-pulse">
          Simple. Hassle-free. Done and dusted.
        </p>
      </div>
    </section>
  );
}
