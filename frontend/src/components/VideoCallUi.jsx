import { CallControls, CallingState, SpeakerLayout, useCallStateHooks } from "@stream-io/video-react-sdk"
import { Loader2Icon, MessageSquareIcon, UsersIcon, XIcon } from "lucide-react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { Channel, Chat, MessageInput, MessageList, Thread, Window } from "stream-chat-react"
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/v2/index.css"

const VideoCallUi = ({channel, chatClient}) => {
  const navigate = useNavigate();
  const { useCallCallingState, useParticipantCount } = useCallStateHooks();
  const callingState = useCallCallingState();
  const participantCount = useParticipantCount();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    return () => {
      setIsActive(false);
    };
  }, []);

  // ✅ NULL CHECK
  if (!chatClient || !channel) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader2Icon className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (callingState === CallingState.JOINING) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
          <p className="text-lg">Joining call...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col p-4 relative str-video bg-[#050505]">
      {/* TOP HEADER */}
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
          <div className="size-2 rounded-full bg-success animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest">
            {participantCount} Active Node{participantCount > 1 ? 's' : ''}
          </span>
        </div>

        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`px-4 py-2 rounded-full text-xs font-black tracking-widest transition-all border ${
            isChatOpen ? "bg-primary text-white border-primary" : "bg-white/5 text-white/40 border-white/10 hover:border-primary/50"
          }`}
        >
          {isChatOpen ? "CLOSE ENCRYPTION CHAT" : "OPEN CHAT"}
        </button>
      </div>

      {/* VIDEO AREA */}
      <div className="flex-1 flex gap-4 overflow-hidden relative">
        <div className={`flex-1 rounded-3xl overflow-hidden border border-white/10 bg-[#111] transition-all duration-500 shadow-inner ${isChatOpen ? 'scale-95' : 'scale-100'}`}>
          <SpeakerLayout />
        </div>

        {/* INTEGRATED SLIDE-IN CHAT */}
        {chatClient && channel && isActive && (
          <div className={`
            absolute right-0 top-0 bottom-0 z-50 transition-all duration-500 transform
            ${isChatOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
            w-80 bg-[#0a0a0a] border-l border-white/10 shadow-2xl rounded-l-3xl overflow-hidden
          `}>
            <Chat client={chatClient} theme="str-chat__theme-dark">
              <Channel channel={channel}>
                <div className="h-full flex flex-col">
                  <div className="p-4 border-b border-white/5 bg-white/[0.02]">
                    <h3 className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40">Secure Channel</h3>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <MessageList />
                  </div>
                  <div className="p-4 bg-white/[0.01]">
                    <MessageInput />
                  </div>
                </div>
              </Channel>
            </Chat>
          </div>
        )}
      </div>

      {/* BOTTOM FLOATING CONTROLS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto bg-[#111]/80 backdrop-blur-2xl px-6 py-2 rounded-[2rem] border border-white/10 shadow-2xl">
          <CallControls onLeave={() => navigate("/dashboard")} />
        </div>
      </div>
    </div>
  );
};

export default VideoCallUi;