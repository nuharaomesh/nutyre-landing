import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Clock, ShieldCheck, Zap, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center pt-24 pb-20 md:pt-32 md:pb-40 bg-slate-950 overflow-hidden"
      role="banner"
    >
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8">
              <Clock size={16} className="animate-pulse" />
              <span className="uppercase tracking-wider">
                24/7 Rapid Response
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-black text-white leading-[1.05] mb-8 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Emergency Tyre Repair
              </span>
              <br /> Fast Help When You Need It Most
            </h1>

            <div className="space-y-6 text-sm text-slate-300 mb-12 max-w-xl">
              <p className="font-black text-white text-2xl md:text-3xl leading-snug">
                Flat tyre? Puncture out of nowhere? We’ve got you.
              </p>
              <p className="leading-relaxed opacity-90">
                A sudden flat tyre can ruin your plans in seconds but it doesn’t
                have to. With NuTyre’s trusted emergency tyre repair service,
                help is only a few clicks away. Whether you're stuck at home, at
                work, or by the roadside, we bring the fix to you fast,
                friendly, and fully equipped.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

              <Link href="#booking">
                <Button
                  size="lg"
                  ariaLabel="Book emergency tyre repair now"
                  className="relative w-full sm:w-auto text-md py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white transition-all hover:scale-[1.02] active:scale-95 font-black uppercase tracking-tight"
                >
                  Book Emergency Tyre Repair Now
                </Button>
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800 flex flex-wrap gap-8 items-center text-slate-400 font-bold text-sm uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-blue-500" />
                <span>UK Wide</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={18} className="text-blue-500" />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-500" />
                <span>On-Site Fitting</span>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] md:h-[600px] w-full animate-in fade-in zoom-in-95 duration-1000 delay-200">
            <div className="absolute -inset-4 bg-blue-500/5 rounded-[3rem] blur-2xl" />

            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/nutyre_tyre_fitting.jpeg"
                alt="Professional mobile tyre repair technician arriving for emergency service"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-black text-white">
                    4.9
                  </div>
                  <div>
                    <div className="text-white font-bold">
                      Expert Technicians
                    </div>
                    <div className="text-slate-300 text-sm italic">
                      Trusted Professional Service
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-slate-900/80 backdrop-blur-lg border-t border-slate-800">
        <Link href="#booking">
          <Button className="w-full py-5 text-md font-black uppercase tracking-tight bg-blue-600 rounded-xl">
            Book Emergency Tyre Repair Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
