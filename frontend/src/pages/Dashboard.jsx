import React from 'react'
import {useNavigate} from "react-router"
import {useUser} from "@clerk/clerk-react"
import { useState } from 'react'
import { useActiveSession, useCreateSession, useMyRecentSession } from '../hooks/useSessions'
import TestComponent from '../components/TestComponent'


const Dashboard = () => {
  const navigate = useNavigate()
  const {user} = useUser();
  const [showCreateModal , setShowCreateModel ] = useState(false);
  const [roomConfig , setRoomConfig] = useState({problem:"", difficulty:""});

  const createSessionMutation = useCreateSession();

  const {data:activeSessionData , isLoading: loadingActiveSession } = useActiveSession();
  const { data:recentSessionData , isLoading: loadingRecentSession } = useMyRecentSession();
  
  console.log(activeSessionData);
  console.log(recentSessionData);

  



  return (
    <div>Dashboard
      <TestComponent/>
    </div>
  )
}

export default Dashboard