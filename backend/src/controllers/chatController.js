import { chatClient } from "../lib/stream.js";

export  async function getStreamToken(req , res){
    try{
        // use clerkId for stream (not mongodb _id) => it should match the id we have in the stream dashboard
        const token = chatClient.createToken(req.user._id)

        res.status(200).json({
            token ,
            userId: req.user.clerkId,
            userName: req.user.name,
            userImage:req.user.image
        })

    }catch(error){
        console.log("Error is getStreamToken controller:", error.message)
        res.status(500).json({message:"Intenal Server error"})

    }
}