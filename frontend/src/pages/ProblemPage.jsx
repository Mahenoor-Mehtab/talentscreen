import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { PROBLEMS, LANGUAGE_CONFIG } from '../data/problems';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import "./ProblemPage.css";
import { GripVertical , PlayIcon, SendIcon, Settings2Icon, RotateCcwIcon} from "lucide-react";
import Navbar from '../components/Navbar';
import ProblemDescription from '../components/ProblemDescription';
import CodeEditor from '../components/CodeEditor';
import OutputPanel from '../components/OutputPanel';
import { executeCode } from '../api/piston';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti'


const ProblemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProblemid, setCurrentProblemid] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(
    PROBLEMS[currentProblemid].starterCode.javascript
  );
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const currentProblem = PROBLEMS[currentProblemid]


  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurrentProblemid(id)
      setCode(PROBLEMS[id].starterCode[selectedLanguage])
      setOutput(null)
    }
  }, [id, selectedLanguage])

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang)
    setCode(currentProblem.starterCode[newLang])
    setOutput(null)
   };

const handleProblemChange = (id) => {
  setCurrentProblemid(id);
  navigate(`/problem/${id}`);
};

   const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
    });

    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.8, y: 0.6 },
    });
  };


  const normalizeOutput = (output) => {
    // normalize output for comparison (trim whitespace, handle different spacing)
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          // remove spaces after [ and before ]
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          // normalize spaces around commas to single space after comma
          .replace(/\s*,\s*/g, ",")
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

  const checkIfTestsPassed = (actualOutput , expectedOutput) => {
    const normalizeActual = normalizeOutput(actualOutput);
    const normalizeExpected = normalizeOutput(expectedOutput)
    return normalizeActual === normalizeExpected

   };

  const handleRunCode = async () => {
    setIsRunning(true)
    setOutput(null)
  
    const result = await executeCode(selectedLanguage, code)
    setOutput(result)
    setIsRunning(false)

    // check if code executed successfully and matches expected output

    if(result.success){
      const expectedOutput = currentProblem.expectedOutput[selectedLanguage]
      const testsPassed = checkIfTestsPassed(result.output , expectedOutput)

      if(testsPassed){
        triggerConfetti();
        toast.success("All tests passed! Great job!")
      }else{
        toast.error("Tests failed. Check your output! ")
      }
    }
    else{
      toast.error("Code execution failed!")
    }
    

   }

  return (
    <div className='h-screen flex flex-col bg-[#0a0a0a] '>
      <Navbar />

      {/* Main Container with subtle padding for the "Bezel" look */}
      <div className='flex-1 p-2 pt-20'>
        <PanelGroup direction="horizontal" className="rounded-2xl  gap-1">

          {/* LEFT PANEL: PROBLEM DESCRIPTION */}
          <Panel defaultSize={40} minSize={25} className='bg-base-100 rounded-2xl border border-base-content/5 flex flex-col  shadow-2xl'>
            <div className='flex items-center justify-between px-6 py-3 border-b border-base-content/5 bg-base-200/30'>
              <span className='text-xs font-bold uppercase tracking-widest opacity-60'>Problem Statement</span>
              <div className='flex gap-2'>
                <div className='size-2 rounded-full bg-error/20'></div>
                <div className='size-2 rounded-full bg-warning/20'></div>
                <div className='size-2 rounded-full bg-success/20'></div>
              </div>
            </div>
            <div className='flex-1 overflow-y-auto custom-scrollbar'>
              <ProblemDescription 
              problem = {currentProblem}
              currentProblemid={currentProblemid}
              onProblemChange= {handleProblemChange}
             allProblems= {Object.values(PROBLEMS)}

              />
            </div>
          </Panel>

          {/* CUSTOM VERTICAL RESIZE HANDLE */}
          <PanelResizeHandle className="group relative w-1.5 transition-all hover:w-2">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-base-content/5 group-hover:bg-primary/50 transition-colors" />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1 bg-base-100 border border-base-content/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'>
              <GripVertical className='size-3 rotate-90 opacity-40' />
            </div>
          </PanelResizeHandle>

          {/* RIGHT SIDE: EDITOR & OUTPUT */}
          <Panel defaultSize={60} minSize={30}>
            <PanelGroup direction="vertical" className='gap-1'>

              {/* TOP: CODE EDITOR */}
              <Panel defaultSize={70} minSize={20} className='bg-[#1e1e1e] rounded-2xl border border-base-content/5 flex flex-col shadow-2xl'>
                {/* Editor Header */}
               <CodeEditor 
    selectedLanguage={selectedLanguage}
    code={code}
    isRunning={isRunning}
    onLanguageChange={handleLanguageChange}
    onCodeChange={setCode}
    onRunCode={handleRunCode}
  />
              </Panel>

              {/* CUSTOM HORIZONTAL RESIZE HANDLE */}
              <PanelResizeHandle className="group relative h-1.5 transition-all hover:h-2">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-base-content/5 group-hover:bg-primary/50 transition-colors" />
              </PanelResizeHandle>

              {/* BOTTOM: OUTPUT PANEL */}
              <Panel defaultSize={30} minSize={10} className='bg-base-100 rounded-2xl border border-base-content/5 flex flex-col  shadow-2xl'>
                <div className='px-6 py-2 border-b border-base-content/5 bg-base-200/30 flex items-center gap-2'>
                  <div className='size-1.5 rounded-full bg-success animate-pulse'></div>
                  <span className='text-[10px] font-black uppercase tracking-widest opacity-60'>Terminal Output</span>
                </div>
                <div className='flex-1 overflow-auto bg-[#0d0d0d] custom-scrollbar'>
                  <OutputPanel output={output} isRunning={isRunning} />
                </div>
              </Panel>

            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>

      
    </div>
  )
}

export default ProblemPage;