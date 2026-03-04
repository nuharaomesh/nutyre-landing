import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="booking"
      className="py-24 bg-blue-700 text-white text-center scroll-mt-20"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-4xl md:text-6xl font-black mb-8">
          Don’t Let a Flat Stop You
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-blue-100 font-medium">
          Flat tyres don’t keep office hours, and neither do we. Whether it’s an
          early morning breakdown or a late-night surprise, NuTyre is ready to
          help you get moving again.
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-lg font-bold">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={20} /> Quick mobile response
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={20} /> Same-day slots available
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={20} /> UK-wide coverage
          </span>
        </div>
        <Button
          variant="outline"
          className="bg-white text-blue-700 hover:bg-slate-100 py-4 px-6 text-md sm:text-xl border-none shadow-2xl transition-transform hover:scale-105"
        >
          Check Availability & Book Your Repair Now
        </Button>
      </div>
    </section>
  );
}
