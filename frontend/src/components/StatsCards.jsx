import { TrophyIcon, UsersIcon, ActivityIcon, ArrowUpRight } from "lucide-react";

function StatsCards({ activeSessionCount, recentSessionCount }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      
      {/* Active Count Card */}
      <div className="group relative overflow-hidden bg-[#0d0d0d] border border-primary/20 p-6 rounded-[2rem] transition-all duration-300 hover:border-primary/40 shadow-2xl shadow-primary/5">
        {/* Glow Effect */}
        <div className="absolute -right-4 -top-4 size-24 bg-primary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative z-10 flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
              <UsersIcon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-success/10 border border-success/20 rounded-full">
              <div className="size-1.5 rounded-full bg-success animate-pulse" />
              <span className="text-[10px] font-black text-success uppercase tracking-widest">Live</span>
            </div>
          </div>

          <div>
            <div className="text-5xl font-black text-white tracking-tighter tabular-nums leading-none">
              {activeSessionCount || 0}
            </div>
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em] mt-3">
              Active Lobbies
            </p>
          </div>
        </div>
      </div>

      {/* Recent Count Card */}
      <div className="group relative overflow-hidden bg-[#0d0d0d] border border-secondary/20 p-6 rounded-[2rem] transition-all duration-300 hover:border-secondary/40 shadow-2xl shadow-secondary/5">
        {/* Glow Effect */}
        <div className="absolute -right-4 -top-4 size-24 bg-secondary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10 flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-secondary/10 rounded-2xl border border-secondary/20">
              <TrophyIcon className="w-6 h-6 text-secondary" />
            </div>
            <div className="p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-all">
               <ArrowUpRight className="size-4 text-white/20" />
            </div>
          </div>

          <div>
            <div className="text-5xl font-black text-white tracking-tighter tabular-nums leading-none">
              {recentSessionCount || 0}
            </div>
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em] mt-3">
              Total Sessions
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default StatsCards;