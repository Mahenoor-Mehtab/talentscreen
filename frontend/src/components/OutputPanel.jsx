import { TerminalIcon } from "lucide-react";

function OutputPanel({ output , isRunning}) {
  if (isRunning) {
    return (
      <div className='h-full flex flex-col items-center justify-center text-primary animate-pulse bg-[#0d0d0d]'>
        <TerminalIcon className='size-8 mb-2' />
        <p className='text-xs font-mono tracking-tighter'>Executing code on server...</p>
      </div>
    );
  }
  // 2. Initial/Empty State
  if (!output) {
    return (
      <div className='h-full flex flex-col items-center justify-center text-base-content/20 bg-[#0d0d0d]'>
        <TerminalIcon className='size-12 mb-4 opacity-10' />
        <p className='text-[10px] uppercase font-black tracking-[0.2em]'>No Output Detected</p>
      </div>
    );
  }

  return (
    <div className="h-full bg-base-100 flex flex-col">
      <div className="px-4 py-2 bg-base-200 border-b border-base-300 font-semibold text-sm">
        Output
      </div>
      <div className="flex-1 overflow-auto p-4">
        {output === null ? (
          <p className="text-base-content/50 text-sm">Click "Run Code" to see the output here...</p>
        ) : output.success ? (
          <pre className="text-sm font-mono text-success whitespace-pre-wrap">{output.output}</pre>
        ) : (
          <div>
            {output.output && (
              <pre className="text-sm font-mono text-base-content whitespace-pre-wrap mb-2">
                {output.output}
              </pre>
            )}
            <pre className="text-sm font-mono text-error whitespace-pre-wrap">{output.error}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
export default OutputPanel;