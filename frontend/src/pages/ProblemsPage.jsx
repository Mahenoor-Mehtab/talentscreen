import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { PROBLEMS } from '../data/problems'
import { ChevronRightIcon, Code2Icon, SearchIcon, FilterIcon, SparklesIcon } from 'lucide-react'
import { getDifficultyBadgeClass } from '../api/utils'
import { Link } from 'react-router' 

const ProblemsPage = () => {
  const problems = Object.values(PROBLEMS)
  
  const easyCount = problems.filter(p => p.difficulty === 'Easy').length;
  const mediumCount = problems.filter(p => p.difficulty === 'Medium').length;
  const hardCount = problems.filter(p => p.difficulty === 'Hard').length;

  return (
    <div className='min-h-screen bg-base-200/50 pb-20'>
      <Navbar />
      
      <div className='max-w-6xl mx-auto px-4 pt-28'>
        {/* UNIQUE HEADER & STATS COMBO */}
        <div className='grid lg:grid-cols-3 gap-8 mb-12 items-end'>
          <div className='lg:col-span-2'>
            <div className='flex items-center gap-2 text-primary font-bold mb-2'>
                <SparklesIcon className='size-5'/>
                <span className='uppercase tracking-widest text-xs'>Challenge Yourself</span>
            </div>
            <h1 className='text-4xl md:text-5xl font-black tracking-tight mb-4'>
              Practice <span className='text-primary'>Problems</span>
            </h1>
            <p className='text-base-content/60 text-lg max-w-xl'>
              Curated coding challenges designed to build your problem-solving 
              intuition and technical depth.
            </p>
          </div>

        {/* COMPACT TOP STATS */}
<div className='bg-base-100 rounded-3xl p-6 border border-base-content/5 shadow-sm flex justify-between items-center'>
  <StatMini label="Total" value={problems.length} color="text-primary" />
  
  <div className='divider divider-horizontal mx-1'></div>
  
  <StatMini label="Easy" value={easyCount} color="text-success" />
  
  <div className='divider divider-horizontal mx-1'></div>
  
  <StatMini label="Medium" value={mediumCount} color="text-warning" />
  
  <div className='divider divider-horizontal mx-1'></div>
  
  <StatMini label="Hard" value={hardCount} color="text-error" />
</div>
</div>

        {/* SEARCH & FILTER BAR */}
        <div className='flex flex-col md:flex-row gap-4 mb-8'>
            <div className='relative flex-1'>
                <SearchIcon className='absolute left-4 top-1/2 -translate-y-1/2 size-5 opacity-30'/>
                <input 
                    type="text" 
                    placeholder="Search by title, category, or difficulty..." 
                    className="input input-bordered w-full pl-12 bg-base-100 rounded-2xl border-none shadow-sm focus:ring-2 ring-primary/20"
                />
            </div>
            <button className='btn btn-ghost bg-base-100 rounded-2xl gap-2 shadow-sm'>
                <FilterIcon className='size-4'/> Filter
            </button>
        </div>

        {/* PROBLEMS LIST - MODERN CARDS */}
        <div className='grid gap-4'>
          {problems.map((problem) => (
            <Link 
              to={`/problems/${problem.id}`} 
              key={problem.id}
              className='group block'
            >
              <div className='bg-base-100 hover:bg-primary/[0.02] border border-base-content/5 hover:border-primary/20 transition-all duration-300 rounded-[2rem] p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 relative overflow-hidden'>
                
                {/* Background Flare on Hover */}
                <div className='absolute -right-10 -top-10 size-32 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity'/>

                <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
                  <div className='flex items-start gap-5'>
                    {/* Icon Box */}
                    <div className='size-14 rounded-2xl bg-base-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300'>
                      <Code2Icon className='size-7'/>
                    </div>

                    <div>
                      <div className='flex flex-wrap items-center gap-3 mb-2'>
                        <h2 className='text-xl font-bold group-hover:text-primary transition-colors'>
                            {problem.title}
                        </h2>
                        <span className={`badge badge-sm font-bold py-3 px-4 rounded-lg border-none ${getDifficultyBadgeClass(problem.difficulty)}`}>
                            {problem.difficulty}
                        </span>
                        <span className='text-xs font-bold uppercase tracking-widest opacity-40 bg-base-200 px-2 py-1 rounded'>
                            {problem.category}
                        </span>
                      </div>
                      <p className='text-base-content/60 line-clamp-1 md:line-clamp-2 max-w-2xl text-sm'>
                        {problem.description.text}
                      </p>
                    </div>
                  </div>

                  {/* Action Section */}
                  <div className='flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0'>
                    <div className='text-right hidden sm:block'>
                        <div className='text-[10px] uppercase font-bold opacity-40 mb-1'>Acceptance</div>
                        <div className='font-mono font-bold'>{problem.acceptance}%</div>
                    </div>
                    <div className='btn btn-primary rounded-2xl px-6 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all'>
                      <span className='font-bold'>Solve</span>
                      <ChevronRightIcon className='size-4 group-hover:translate-x-1 transition-transform'/>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// Stat Sub-component
const StatMini = ({ label, value, color }) => (
    <div className='text-center'>
        <div className={`text-2xl font-black ${color}`}>{value}</div>
        <div className='text-[10px] uppercase tracking-tighter font-bold opacity-40'>{label}</div>
    </div>
)

export default ProblemsPage