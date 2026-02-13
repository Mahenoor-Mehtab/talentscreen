import React from 'react';
import { PROBLEMS } from '../data/problems';
import { LoaderIcon, PlusIcon, XIcon, Code2Icon, Users2Icon, InfoIcon } from 'lucide-react';
import { getDifficultyBadgeClass } from '../api/utils'; // Assuming you have this helper

const CreateSessionModel = ({ isOpen, onClose, roomConfig, setRoomConfig, onCreateRoom, isCreating }) => {
  const problems = Object.values(PROBLEMS);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center p-4'>
      {/* GLASS BACKDROP */}
      <div 
        className='absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity' 
        onClick={onClose} 
      />

      {/* MODAL CONTAINER */}
      <div className='relative w-full max-w-lg bg-[#111111] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col transform transition-all animate-in fade-in zoom-in duration-300'>
        
        {/* HEADER */}
        <div className='px-8 py-6 border-b border-white/5 bg-gradient-to-r from-primary/10 to-transparent flex items-center justify-between'>
          <div>
            <h3 className='text-xl font-black text-white tracking-tight'>Start Pair Session</h3>
            <p className='text-xs text-white/40 font-medium uppercase tracking-widest mt-1'>Collaboration Mode</p>
          </div>
          <button onClick={onClose} className='p-2 hover:bg-white/5 rounded-xl transition-colors opacity-40 hover:opacity-100'>
            <XIcon className='size-5 text-white' />
          </button>
        </div>

        {/* BODY */}
        <div className='p-8 space-y-8'>
          
          {/* SELECTION FIELD */}
          <div className='space-y-3'>
            <label className='flex items-center gap-2 text-xs font-bold text-white/60 uppercase tracking-widest ml-1'>
              <Code2Icon className='size-4 text-primary' />
              Select Coding Problem
            </label>
            
            <div className='relative group'>
              <select 
                value={roomConfig.problem || ""}
                onChange={(e) => {
                  const selectedProblem = problems.find((p) => p.title === e.target.value);
                  setRoomConfig({
                    difficulty: selectedProblem.difficulty,
                    problem: e.target.value
                  });
                }}
                className='select select-bordered w-full h-14 bg-white/5 border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 ring-primary/20 focus:border-primary transition-all appearance-none text-[15px]'
              >
                <option value="" disabled className='bg-[#111111]'>Choose a challenge...</option>
                {problems?.map((problem) => (
                  <option key={problem.id} value={problem.title} className='bg-[#111111]'>
                    {problem.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* DYNAMIC ROOM SUMMARY CARD */}
          {roomConfig.problem ? (
            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 space-y-4 animate-in slide-in-from-bottom-2'>
              <div className='flex items-start justify-between'>
                <div>
                  <h4 className='font-bold text-white text-lg'>{roomConfig.problem}</h4>
                  <div className='flex items-center gap-2 mt-2'>
                    <span className={`badge badge-sm font-bold border-none py-2 px-3 ${getDifficultyBadgeClass(roomConfig.difficulty)}`}>
                      {roomConfig.difficulty}
                    </span>
                    <span className='text-[10px] text-white/40 uppercase font-black'>Pair Programming</span>
                  </div>
                </div>
                <div className='bg-white/5 p-2 rounded-xl'>
                   <InfoIcon className='size-5 text-primary opacity-60' />
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4 pt-2 border-t border-white/5'>
                <div className='flex items-center gap-2'>
                  <Users2Icon className='size-4 text-white/20' />
                  <span className='text-xs text-white/60'>Capacity: <b className='text-white'>2</b></span>
                </div>
                <div className='flex items-center gap-2 text-right justify-end'>
                  <div className='size-2 rounded-full bg-success animate-pulse' />
                  <span className='text-[10px] text-success font-bold uppercase tracking-wider'>Waiting Allowed</span>
                </div>
              </div>
            </div>
          ) : (
            <div className='h-[160px] border-2 border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center text-white/20 text-center px-10'>
              <Code2Icon className='size-8 mb-3 opacity-20' />
              <p className='text-sm italic'>Select a problem to see the session preview and room requirements</p>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className='px-8 py-6 bg-white/5 flex items-center justify-end gap-3'>
          <button 
            onClick={onClose} 
            className='btn btn-ghost border-none hover:bg-white/5 rounded-xl px-6 text-white/60 font-bold'
          >
            Cancel
          </button>
          
          <button 
            className={`btn btn-primary rounded-xl px-8 gap-3 shadow-xl shadow-primary/20 transition-all duration-300 ${isCreating ? 'loading' : ''}`}
            onClick={onCreateRoom}
            disabled={isCreating || !roomConfig.problem}
          >
            {isCreating ? (
              <LoaderIcon className='size-5 animate-spin' />
            ) : (
              <PlusIcon className='size-5' />
            )}
            <span className='font-bold'>{isCreating ? 'Setting up Room...' : 'Create Session'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSessionModel;