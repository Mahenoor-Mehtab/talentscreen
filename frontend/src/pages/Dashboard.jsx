import React from 'react'
import {useNavigate} from "react-router"
import {useUser} from "@clerk/clerk-react"
import { useState } from 'react'
import { useActiveSession, useCreateSession, useMyRecentSession } from '../hooks/useSessions'
import Navbar from '../components/Navbar'
import WelcomeSection from '../components/WelcomeSection'
import StatsCards from '../components/StatsCards'
import ActiveSession from '../components/ActiveSession'
import RecentSessions from '../components/RecentSessions'
import CreateSessionModel from '../components/CreateSessionModel'

const Dashboard = () => {
  const navigate = useNavigate()
  const {user} = useUser();
  const [showCreateModal , setShowCreateModel ] = useState(false);
  const [roomConfig , setRoomConfig] = useState({problem:"", difficulty:""});

  const createSessionMutation = useCreateSession();

  const {data:activeSessionData , isLoading: loadingActiveSession } = useActiveSession();
  const { data:recentSessionData , isLoading: loadingRecentSession } = useMyRecentSession();
  

 const handleCreateRoom = ()=>{
  if(!roomConfig.problem || !roomConfig.difficulty) return ;

  createSessionMutation.mutate({
    problem:roomConfig.problem , difficulty:roomConfig.difficulty.toLowerCase()
  },
   {
    onSuccess: (data)=>{
      setShowCreateModel(false)
      navigate(`/session/${data.session._id}`)
    }
   }
)
 }
 
 const activeSessions = activeSessionData?.sessions || [];
 const recentSessions = recentSessionData?.sessions || [];

 const isUserInSession = (session)=>{
  if(!user.id) return false;

  return session.host?.clerkId === user.id || session.participant?.clerkId === user.id;

 }

return (
    <div className='min-h-screen bg-[#020202] text-slate-200 selection:bg-primary/30'>
      <Navbar />
      
      {/* Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <WelcomeSection onCreateSession={() => setShowCreateModel(true)} />

        <main className="max-w-7xl mx-auto px-6 pb-20">
          {/* Main 12-column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN (Col span 7) - Stats & Past Sessions */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* 1. Stats Cards */}
              <section className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-4 shadow-2xl">
                <StatsCards
                  activeSessionCount={activeSessions.length}
                  recentSessionCount={recentSessions.length}
                />
              </section>

              {/* 2. Past Sessions (Moved to Bottom Left) */}
              <section className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] shadow-2xl overflow-hidden">
                <div className="px-8 py-6 border-b border-white/5 bg-white/[0.02]">
                  <h2 className="text-lg font-black tracking-tight uppercase opacity-90">Session History</h2>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest mt-1">Your past completions</p>
                </div>
                
                <div className="p-4">
                  <RecentSessions 
                    sessions={recentSessions} 
                    isLoading={loadingRecentSession} 
                  />
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN (Col span 5) - Active Sessions (Sticky) */}
            <div className="lg:col-span-5">
              <aside className="sticky top-24 space-y-6">
                <section className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[calc(100vh-140px)]">
                  <div className="px-8 py-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="size-2 rounded-full bg-success animate-ping absolute inset-0" />
                        <div className="size-2 rounded-full bg-success relative" />
                      </div>
                      <h2 className="text-lg font-black tracking-tight uppercase">Live Lobbies</h2>
                    </div>
                    <span className="text-[10px] font-bold text-white/20 tracking-[0.2em] uppercase">Queue</span>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                    <ActiveSession
                      sessions={activeSessions}
                      isLoading={loadingActiveSession}
                      isUserInSession={isUserInSession}
                    />
                  </div>
                </section>

                {/* Pro Tip Card */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-[2rem] border border-white/5">
                  <p className="text-xs font-bold text-primary italic">"Code is like humor. When you have to explain it, it’s bad."</p>
                </div>
              </aside>
            </div>

          </div>
        </main>
      </div>

      {/* Model remains the same */}
      <CreateSessionModel
        isOpen={showCreateModal}
        onClose={() => setShowCreateModel(false)}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreateRoom={handleCreateRoom}
        isCreating={createSessionMutation.isPending}
      />
    </div>
  )
}

export default Dashboard