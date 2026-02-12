import { Inngest } from "inngest";
import connectDB from "./db.js";
import User from "../models/User.js";
import { deleteStreamUser, upsertStreamUser } from "./stream.js";

export const inngest = new Inngest({ id: "talent-screen" }); // created inngest client = allows use to communicate with inngest

//! in this we take the user from clerk and save in the mongo db
const syncUser = inngest.createFunction(
    {id: "sync-user"},
    {event:"user.created"},
    async ({event}) =>{
        await connectDB()

        const {id , email_addresses, first_name, last_name, image_url} = event.data

         const email = email_addresses?.[0]?.email_address

         if (!id || !email) {
            console.error("❌ Missing required fields:", {id, email})
            throw new Error("User ID and email are required")
        }

        const newUser = {
            clerkUserId:id,
            name:`${first_name || ""} ${last_name || ""}`,
            profileImage:image_url,
            email:email

        }

       await User.create(newUser)

    // Save data to stream 
       await upsertStreamUser({
        id: newUser.clerkUserId.toString(),
        name:newUser.name,
        image:newUser.profileImage
       });
    }
)


//! deleting the user from database
const deleteUserFromDB = inngest.createFunction(
    {id: "delete-User-From-DB"},
    {event:"user.deleted"},
    async ({event}) =>{
        await connectDB()

        const {id} = event.data
    await User.deleteOne({clerkUserId:id})

    // delete data from stream
    await deleteStreamUser(id.toString())
    }
)

export const functions = [syncUser,deleteUserFromDB]