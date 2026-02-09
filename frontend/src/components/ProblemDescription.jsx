import React from 'react'
import { getDifficultyBadgeClass } from '../api/utils'
import { InfoIcon, LightbulbIcon, ListChecksIcon, TerminalIcon } from 'lucide-react'

const ProblemDescription = ({ problem, currentProblemid, onProblemChange, allProblems }) => {
  if (!problem) return null;

  return (
    <div className='h-full flex flex-col bg-base-100 text-base-content'>
      
      {/* STICKY HEADER AREA */}
      <div className='sticky top-0 z-10 bg-base-100/80 backdrop-blur-md p-6 border-b border-base-content/5'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-start justify-between'>
            <div>
              <h1 className='text-2xl font-black tracking-tight mb-2'>{problem.title}</h1>
              <div className='flex items-center gap-3'>
                <span className={`badge badge-sm font-bold py-3 px-4 rounded-lg border-none ${getDifficultyBadgeClass(problem.difficulty)}`}>
                  {problem.difficulty}
                </span>
                <span className='text-[10px] font-bold uppercase tracking-widest opacity-40 bg-base-200 px-2 py-1 rounded'>
                  {problem.category}
                </span>
              </div>
            </div>
            
            {/* PROBLEM SELECTOR - Styled */}
            <div className='group relative'>
                <select
                className='select select-bordered select-sm bg-base-200 border-none rounded-xl font-medium text-xs focus:ring-2 ring-primary/20'
                value={currentProblemid}
                onChange={(e) => onProblemChange(e.target.value)}
                >
                {allProblems.map((p) => (
                    <option key={p.id} value={p.id}>
                    {p.title}
                    </option>
                ))}
                </select>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className='p-6 space-y-8 overflow-y-auto custom-scrollbar '>
        
        {/* DESCRIPTION SECTION */}
        <section>
          <div className='flex items-center gap-2 mb-4 opacity-60'>
            <InfoIcon className='size-4'/>
            <h2 className='text-xs font-black uppercase tracking-[0.2em]'>Description</h2>
          </div>
          <div className='prose prose-sm max-w-none text-base-content/80 leading-relaxed'>
            <p className='text-base'>{problem.description.text}</p>
            
            {problem.description.notes && problem.description.notes.length > 0 && (
              <div className='mt-4 p-4 rounded-2xl bg-primary/5 border-l-4 border-primary space-y-2'>
                {problem.description.notes.map((note, idx) => (
                  <div key={idx} className='flex gap-3 items-start'>
                    <LightbulbIcon className='size-4 text-primary shrink-0 mt-0.5'/>
                    <p className='text-sm italic opacity-90'>{note}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* EXAMPLES SECTION */}
        <section className='space-y-6'>
          <div className='flex items-center gap-2 mb-4 opacity-60'>
            <TerminalIcon className='size-4'/>
            <h2 className='text-xs font-black uppercase tracking-[0.2em]'>Test Cases</h2>
          </div>
          
          <div className='grid gap-6'>
            {problem.examples.map((example, idx) => (
              <div key={idx} className='group relative bg-base-200/50 rounded-2xl p-5 border border-base-content/5 hover:border-primary/20 transition-all'>
                <span className='absolute -top-3 left-6 bg-base-100 px-3 py-1 rounded-full text-[10px] font-black border border-base-content/5 opacity-60 uppercase'>
                  Example {idx + 1}
                </span>
                
                <div className='space-y-3 font-mono text-sm mt-2'>
                  <div className='flex flex-col sm:flex-row sm:gap-4'>
                    <span className='text-primary font-bold w-16'>Input:</span>
                    <span className='bg-black/20 px-3 py-1 rounded-lg flex-1 text-base-content/70'>{example.input}</span>
                  </div>
                  <div className='flex flex-col sm:flex-row sm:gap-4'>
                    <span className='text-success font-bold w-16'>Output:</span>
                    <span className='bg-black/20 px-3 py-1 rounded-lg flex-1 text-base-content/70'>{example.output}</span>
                  </div>
                  
                  {example.explanation && (
                    <div className='pt-3 border-t border-base-content/5 mt-3 italic text-xs text-base-content/50'>
                      <span className='font-bold not-italic text-base-content/70 mr-2'>// Explanation:</span> 
                      {example.explanation}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONSTRAINTS SECTION */}
        {problem.constraints && (
          <section>
            <div className='flex items-center gap-2 mb-3 opacity-60'>
              <ListChecksIcon className='size-4'/>
              <h2 className='text-xs font-black uppercase tracking-[0.2em]'>Constraints</h2>
            </div>
            <ul className='grid gap-2'>
              {problem.constraints.map((constraint, idx) => (
                <li key={idx} className='flex items-center gap-3 text-sm font-mono opacity-70 bg-base-200/30 p-2 rounded-lg'>
                  <div className='size-1 rounded-full bg-base-content/30'></div>
                  {constraint}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* FOOTER STATS */}
      <div className='mt-auto p-4 border-t border-base-content/5 bg-base-200/50 flex justify-around'>
          <div className='text-center'>
             <div className='text-xs font-bold opacity-40 uppercase'>Acceptance</div>
             <div className='font-mono text-sm font-black'>{problem.acceptance}%</div>
          </div>
          <div className='divider divider-horizontal'></div>
          <div className='text-center'>
             <div className='text-xs font-bold opacity-40 uppercase'>Category</div>
             <div className='font-mono text-[10px] font-black'>{problem.category.split('•')[0]}</div>
          </div>
      </div>
    </div>
  )
}

export default ProblemDescription