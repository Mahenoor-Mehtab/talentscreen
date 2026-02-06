import express from 'express'
import { protectRoute } from '../middleware/ProtectRoute.js';
import { createSession, endSession, getActiveSessions, getMyRecentSessions, getSessionById, joinSession } from '../controllers/sessionConroller.js';

const sessionRouter= express.Router();

sessionRouter.post("/", protectRoute , createSession)
sessionRouter.get("/active", protectRoute, getActiveSessions)
sessionRouter.get("/my-recent", protectRoute, getMyRecentSessions)   // whatever old session i had done

sessionRouter.get("/:id", protectRoute, getSessionById)
sessionRouter.post("/:id/join", protectRoute, joinSession)
sessionRouter.post("/:id/end", protectRoute, endSession)


export default sessionRouter