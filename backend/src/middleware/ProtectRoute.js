import { requireAuth }  from '@clerk/express'
import User from '../models/User.js'

export const protectRoute = [
    // if user not login then requireAuth internally redirect you to sign-in page
    requireAuth({signInUrl :"/sign-in"}),
    async(req , res , next)=>{
        try{
            const clerkId= req.auth.userId;
            if(!clerkId) return res.status(401).json({msg:"Unauthorized - invalid token"})

            // find user in db by clerk ID
            const user = await User.findOne({clerkId})
            if(!user) return res.status(404).json({meg: "User not found"}) 

            // attach user to req
                req.user=user;
                next();
        }catch(error){
            console.error("Error in protectRoute middleware", error)
            res.status(500).json({msg:"Internal Server error"})
        }
    }
]

// when you pass an array of middleware to Express , it automatically flattens and executes them sequntially, one by one 