import {useQuery , useMutation} from "@tanstack/react-query"
import { sessionApi } from "../api/session"
import toast from 'react-hot-toast'

export const useCreateSession = ()=>{
    const result = useMutation({
        mutationKey:["createSession"],
        mutationFn: sessionApi.createSession,
        onSuccess: ()=> toast.success("Session created successfully"),
        onError: (error) => toast.error(error.response?.data?.message || "Failed to create room")
    })
    return result;
}

export const useActiveSession = ()=>{
    const result = useQuery({
        queryKey: ["activeSessions"],
        queryFn: sessionApi.getActiveSessions,
    })

    return result; // in the result { data , isLoading } have
}

export const useMyRecentSession = ()=>{
    const result = useQuery({
        queryKey: ["myRecentSession"],
        queryFn: sessionApi.getMyRecentSession
    })

    return result; 
}


export const useSessionById = (id)=>{
    const result = useQuery({
        queryKey: ["session", id],
        queryFn:(id)=> sessionApi.getSessionById(id),
        enabled: !!id,
        refetchInterval: 5000 // refetch every 5 second to detect session status changes
    })

    return result; 
}

export const useJoinSession =(id)=>{
    const result = useMutation({
        mutationKey:["joinSession"],
        mutationFn:(id) => sessionApi.joinSession(id),
        onSuccess: ()=> toast.success("Joined session successfully"),
        onError: (error) => toast.error(error.response?.data?.message || "Failed to join session")
    })
    return result;
}


export const useEndSession =(id)=>{
    const result = useMutation({
        mutationKey:["endSession"],
        mutationFn:(id) => sessionApi.endSession(id),
        onSuccess: ()=> toast.success("Session ended successfully"),
        onError: (error) => toast.error(error.response?.data?.message || "Failed to end session")
    })
    return result;
}