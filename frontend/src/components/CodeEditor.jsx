import React from 'react'
import { LANGUAGE_CONFIG } from '../data/problems'
import { Loader2Icon, PlayIcon, RotateCcwIcon, Settings2Icon, SendIcon } from 'lucide-react'
import Editor from '@monaco-editor/react'

const CodeEditor = ({ selectedLanguage, code, isRunning, onLanguageChange, onCodeChange, onRunCode }) => {
  
  const currentLang = LANGUAGE_CONFIG[selectedLanguage] || LANGUAGE_CONFIG['javascript'];

  return (
    <div className='h-full flex flex-col bg-[#1e1e1e] rounded-2xl overflow-scroll border border-white/5 shadow-2xl'>
      
      {/* 1. HEADER SECTION (LeetCode Style) */}
      <div className='flex items-center justify-between px-3 py-1.5 bg-[#181818] border-b border-white/5 shrink-0'>
        
        {/* Left Side: Lang Selector */}
        <div className='flex items-center gap-2'>
          <div className='bg-white/5 p-1 rounded-md'>
            <img src={currentLang.icon} alt={currentLang.name} className='size-3.5 object-contain'/>
          </div>
          
          <select 
            className='select select-ghost select-xs text-[12px] font-medium focus:bg-transparent pl-0 focus:outline-none hover:bg-white/5 transition-colors'
            value={selectedLanguage}
            onChange={onLanguageChange}
          >
            {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
              <option key={key} value={key} className='bg-[#181818] text-white'>
                {lang.name}
              </option>
            ))}
          </select>

          <div className='h-4 w-[1px] bg-white/10 mx-1'></div>

          <button 
            className='btn btn-ghost btn-xs opacity-40 hover:opacity-100 p-1' 
            title="Reset to starter code"
          >
            <RotateCcwIcon className='size-3.5' />
          </button>
        </div>

        {/* Right Side: Run & Submit Buttons */}
        <div className='flex items-center gap-2'>
          <button 
            className='btn btn-ghost btn-xs opacity-40 hover:opacity-100 p-1'
          >
            <Settings2Icon className='size-4' />
          </button>

          {/* Run Button */}
          <button 
            disabled={isRunning} 
            onClick={onRunCode}
            className='btn btn-sm h-8 min-h-0 bg-[#333333] hover:bg-[#444444] border-none text-white gap-2 px-3 rounded-md'
          >
            {isRunning ? (
              <Loader2Icon className='size-3.5 animate-spin' />
            ) : (
              <PlayIcon className='size-3.5 fill-current text-success' />
            )}
            <span className='text-xs font-semibold'>Run</span>
          </button>

          {/* Submit Button */}
          <button 
            className='btn btn-sm h-8 min-h-0 bg-success hover:bg-success/90 border-none text-success-content gap-2 px-4 rounded-md shadow-lg shadow-success/10'
          >
            <SendIcon className='size-3.5' />
            <span className='text-xs font-bold'>Submit</span>
          </button>
        </div>
      </div>

      {/* 2. EDITOR SPACE */}
      <div className='flex-1 relative'>
        <Editor
          height="100%"
          language={currentLang.monacoLang}
          value={code}
          onChange={onCodeChange}
          theme="vs-dark"
          options={{
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            minimap: { enabled: false },
            padding: { top: 12 },
            fontFamily: "'Fira Code', monospace",
            cursorSmoothCaretAnimation: "on",
            renderLineHighlight: "all",
          }}
        />
      </div>
    </div>
  )
}

export default CodeEditor