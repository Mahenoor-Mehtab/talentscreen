import { useState, useEffect, useRef } from "react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";
import { initializeStreamClient, disconnectStreamClient } from "../api/stream";
import { sessionApi } from "../api/session";

function useStreamClient(session, loadingSession, isHost, isParticipant) {
  const [streamClient, setStreamClient] = useState(null);
  const [call, setCall] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [isInitializingCall, setIsInitializingCall] = useState(true);

  const videoCallRef = useRef(null);
  const chatClientRef = useRef(null);
  const channelRef = useRef(null);
  const isCleaningUpRef = useRef(false);

  useEffect(() => {
    let mounted = true;

    const initCall = async () => {
      if (!session?.callId) {
        setIsInitializingCall(false);
        return;
      }

      if (!isHost && !isParticipant) {
        setIsInitializingCall(false);
        return;
      }

      if (session.status === "completed") {
        setIsInitializingCall(false);
        return;
      }

      try {
        const { token, userId, userName, userImage } = await sessionApi.getStreamToken();
        
        if (!mounted) return;

        const client = await initializeStreamClient(
          { id: userId, name: userName, image: userImage },
          token
        );

        if (!mounted) return;
        setStreamClient(client);

        const videoCall = client.call("default", session.callId);
        await videoCall.join({ create: true });

        if (!mounted) return;
        videoCallRef.current = videoCall;
        setCall(videoCall);

        const apiKey = import.meta.env.VITE_STREAM_API_KEY;
        const chatInstance = StreamChat.getInstance(apiKey);
        
        await chatInstance.connectUser(
          { id: userId, name: userName, image: userImage },
          token
        );

        if (!mounted) return;
        chatClientRef.current = chatInstance;
        setChatClient(chatInstance);

        const chatChannel = chatInstance.channel("messaging", session.callId);
        await chatChannel.watch();

        if (!mounted) return;
        channelRef.current = chatChannel; // ✅ Store channel in ref
        setChannel(chatChannel);

      } catch (error) {
        console.error("Stream initialization error:", error);
        toast.error("Failed to join video call");
      } finally {
        if (mounted) {
          setIsInitializingCall(false);
        }
      }
    };

    if (session && !loadingSession && (isHost || isParticipant)) {
      initCall();
    } else {
      setIsInitializingCall(false);
    }

    return () => {
      mounted = false;

      if (isCleaningUpRef.current) return;
      isCleaningUpRef.current = true;

      // ✅ Clear state immediately to prevent usage
      setChannel(null);
      setChatClient(null);
      setCall(null);
      setStreamClient(null);

      (async () => {
        try {
          // ✅ Stop watching channel first
          if (channelRef.current) {
            try {
              await channelRef.current.stopWatching();
            } catch (error) {
              // Ignore errors
            }
            channelRef.current = null;
          }

          // ✅ Leave video call
          if (videoCallRef.current) {
            try {
              const callState = videoCallRef.current.state?.callingState;
              if (callState !== 'left' && callState !== 'idle') {
                await videoCallRef.current.leave();
              }
            } catch (error) {
              if (!error.message?.includes('already been left')) {
                console.error("Error leaving video call:", error);
              }
            }
            videoCallRef.current = null;
          }

          // ✅ Disconnect chat client
          if (chatClientRef.current) {
            try {
              const connectionState = chatClientRef.current.connectionState;
              if (connectionState === 'connected' || connectionState === 'connecting') {
                await chatClientRef.current.disconnectUser();
              }
            } catch (error) {
              if (!error.message?.includes('disconnect()')) {
                console.error("Error disconnecting chat:", error);
              }
            }
            chatClientRef.current = null;
          }

          // ✅ Disconnect stream client
          await disconnectStreamClient();

        } catch (error) {
          console.error("Cleanup error:", error);
        } finally {
          isCleaningUpRef.current = false;
        }
      })();
    };
  }, [session?.callId, loadingSession, isHost, isParticipant]);

  return {
    streamClient,
    call,
    chatClient,
    channel,
    isInitializingCall,
  };
}

export default useStreamClient;