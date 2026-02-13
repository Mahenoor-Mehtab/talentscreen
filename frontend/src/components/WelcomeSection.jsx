import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, SparklesIcon, ZapIcon } from "lucide-react";


function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="relative pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-12 rounded-[3rem] relative">
          
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <SparklesIcon className="size-12 text-primary" />
          </div>

          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">System Online</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              Welcome, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                {user?.firstName || "Pioneer"}
              </span>
            </h1>
            
            <p className="text-lg text-white/40 max-w-lg font-medium">
              Join elite developers in real-time pair programming. Master the terminal, solve the logic.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onCreateSession}
              className="group relative inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-black text-lg transition-all hover:bg-primary hover:text-white hover:ring-8 ring-primary/20 active:scale-95"
            >
              <ZapIcon className="size-6 fill-current" />
              <span>Create Session</span>
              <ArrowRightIcon className="size-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection