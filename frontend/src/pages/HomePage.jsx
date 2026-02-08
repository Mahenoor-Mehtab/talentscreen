import React from 'react'
import { Link } from 'react-router'
import {
  ArrowRightIcon,
  BotIcon,
  CheckCircle2,
  Code2Icon,
  CpuIcon,
  GlobeIcon,
  LayersIcon,
  SparklesIcon,
  TrophyIcon,
  TerminalIcon,
  ShieldCheckIcon,
  VideoIcon
} from "lucide-react";
import { SignInButton } from '@clerk/clerk-react'

const HomePage = () => {
  
  return (
    <div className="min-h-screen bg-base-100 selection:bg-primary selection:text-white">
      {/* NAVBAR */}
      <nav className='fixed top-0 w-full z-50 bg-base-100/70 backdrop-blur-xl border-b border-base-content/5'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
          <Link to="/" className='flex items-center gap-2 group'>
            <div className='p-2 rounded-xl bg-primary/10 group-hover:bg-primary transition-colors'>
              <CpuIcon className='size-6 text-primary group-hover:text-white'/>
            </div>
            <div className='flex flex-col'>
              <span className='font-bold text-xl tracking-tighter leading-none'>
                Talent<span className='text-primary'>IQ</span>
              </span>
              <span className='text-[10px] uppercase tracking-widest opacity-50 font-bold'>Pro Collaborative</span>
            </div>
          </Link>

          <SignInButton mode='modal'>
            <button className='btn btn-primary btn-sm md:btn-md rounded-full px-8 shadow-lg shadow-primary/20 hover:scale-105 transition-transform'>
              Get Started
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-8 animate-fade-in border border-primary/10">
            <SparklesIcon className="size-4" />
            <span>AI-Powered Technical Assessment Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-[1.1]">
            Code with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Higher Intelligence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            The bridge between raw talent and elite engineering. Talent IQ provides 
            real-time collaboration, HD video, and AI-driven performance insights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SignInButton mode="modal">
              <button className="btn btn-primary btn-lg rounded-2xl px-12 group">
                Start Coding Now
                <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </SignInButton>
           <button className="btn btn-outline btn-lg">
                <VideoIcon className="size-5" />
                Watch Demo
              </button>
          </div>
        </div>
      </section>

      {/* BENTO GRID SECTION (REPLACING IMAGE) */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[600px]">
          
          {/* Main Feature: The Editor Preview */}
          <div className="md:col-span-2 md:row-span-2 bg-neutral rounded-[2.5rem] p-8 border border-white/5 overflow-hidden relative group shadow-2xl">
            <div className="absolute top-6 right-8 flex gap-2">
                <div className="size-3 rounded-full bg-error/20 border border-error/50" />
                <div className="size-3 rounded-full bg-warning/20 border border-warning/50" />
                <div className="size-3 rounded-full bg-success/20 border border-success/50" />
            </div>
            
            <div className="mt-8 space-y-4">
              <h3 className="text-3xl font-bold text-white tracking-tight">Real-time Pair Programming</h3>
              <p className="text-neutral-content/60 max-w-sm">
                Experience zero-latency code syncing with integrated HD video and AI suggestions.
              </p>
              
              <div className="bg-black/40 rounded-2xl p-6 font-mono text-sm text-primary-content/80 border border-white/5 translate-y-12 group-hover:translate-y-6 transition-transform duration-700">
                <p className="text-blue-400">// Talent IQ Intelligent Engine</p>
                <p className="text-purple-400">async function <span className="text-yellow-300">evaluateCandidate</span>(id) {'{'}</p>
                <p className="pl-4 text-gray-400">const metrics = await IQ.analyze(id);</p>
                <p className="pl-4 text-green-400">return metrics.score &gt; 90 ? "Senior" : "Junior";</p>
                <p className="text-purple-400">{'}'}</p>
              </div>
            </div>
            {/* Visual Flare */}
            <div className="absolute -bottom-20 -right-20 size-64 bg-primary/20 blur-[100px] rounded-full" />
          </div>

          {/* Feature: Global Network */}
          <div className="md:col-span-2 bg-gradient-to-br from-base-200 to-base-300 rounded-[2.5rem] p-8 border border-base-content/5 flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <GlobeIcon className="size-8 text-primary group-hover:rotate-12 transition-transform" />
              </div>
              <div className="badge badge-outline border-primary/20 text-primary px-4 py-3 font-bold">50ms Latency</div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Global Edge Network</h3>
              <p className="opacity-60">Engineered for distributed teams. Code together from anywhere without the lag.</p>
            </div>
          </div>

          {/* Feature: Security */}
          <div className="bg-base-200 rounded-[2.5rem] p-6 border border-base-content/5 flex flex-col items-center justify-center text-center gap-4 hover:bg-base-300 transition-colors">
            <div className="p-4 bg-success/10 rounded-full">
              <ShieldCheckIcon className="size-8 text-success" />
            </div>
            <p className="font-bold text-lg leading-tight">ISO-27001 <br/> Certified</p>
          </div>

          {/* Feature: Tech Stacks */}
          <div className="bg-base-200 rounded-[2.5rem] p-6 border border-base-content/5 flex flex-col items-center justify-center text-center gap-4 hover:bg-base-300 transition-colors">
            <div className="flex -space-x-4">
              <div className="size-12 rounded-full bg-blue-500 border-4 border-base-200 flex items-center justify-center text-xs font-bold text-white">React</div>
              <div className="size-12 rounded-full bg-yellow-500 border-4 border-base-200 flex items-center justify-center text-xs font-bold text-black">JS</div>
              <div className="size-12 rounded-full bg-blue-700 border-4 border-base-200 flex items-center justify-center text-xs font-bold text-white">Py</div>
            </div>
            <p className="font-bold text-lg">30+ Stack Support</p>
          </div>

        </div>
      </section>

      {/* VALUE PROPOSITION GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-base-content/5">
        <div className="grid md:grid-cols-3 gap-12">
          <CapabilityCard 
            icon={<BotIcon className="text-primary size-6" />}
            title="AI Evaluation"
            desc="Automated insights into code complexity, logic errors, and candidate problem-solving speed."
          />
          <CapabilityCard 
            icon={<LayersIcon className="text-secondary size-6" />}
            title="Pro Infrastructure"
            desc="Shared terminals, multi-file support, and whiteboarding tools for deep technical vetting."
          />
          <CapabilityCard 
            icon={<TrophyIcon className="text-accent size-6" />}
            title="Skill Benchmarking"
            desc="Compare candidate performance against millions of data points to ensure you hire the best."
          />
        </div>
      </section>
       <section className="bg-base-200/50 py-20 border-y border-base-content/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-12 text-center">
            <div>
                <p className="text-4xl font-bold">12ms</p>
                <p className="text-sm uppercase tracking-widest opacity-50 mt-2">Avg. Latency</p>
            </div>
            <div>
                <p className="text-4xl font-bold">25+</p>
                <p className="text-sm uppercase tracking-widest opacity-50 mt-2">Languages</p>
            </div>
            <div>
                <p className="text-4xl font-bold">100%</p>
                <p className="text-sm uppercase tracking-widest opacity-50 mt-2">Secure & Private</p>
            </div>
        </div>
      </section>
    </div>
  )
}

const CapabilityCard = ({ icon, title, desc }) => (
  <div className="group flex flex-col gap-4 p-8 rounded-[2rem] bg-base-200/40 hover:bg-base-200 transition-all border border-transparent hover:border-primary/10">
    <div className="size-14 rounded-2xl bg-base-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-base-content/60 leading-relaxed">{desc}</p>
  </div>
);

export default HomePage;