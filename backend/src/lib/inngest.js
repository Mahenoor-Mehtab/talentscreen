import { Inngest } from "inngest";
import connectDB from "./db.js";
import User from "../models/User.js";
import { deleteStreamUser, upsertStreamUser } from "./stream.js";

export const inngest = new Inngest({ id: "talent-screen" }); // created inngest client = allows us to communicate with inngest

//! in this we take the user from clerk and save in the mongo db
const syncUser = inngest.createFunction(
    {id: "sync-user"},
    {event: "user.created"},
    async ({event}) => {
        console.log("📦 Event data:", event.data);
        
        await connectDB();

        const {id, email_addresses, first_name, last_name, image_url} = event.data;

        // ✅ Email validation
        const email = email_addresses?.[0]?.email_address;
        
        if (!id || !email) {
            console.error("❌ Missing required fields:", {id, email});
            throw new Error("User ID and email are required");
        }

        const newUser = {
            clerkUserId: id,
            name: `${first_name || ""} ${last_name || ""}`.trim(),
            profileImage: image_url || "",
            email: email  // ✅ Guaranteed to exist
        };

        console.log("💾 Saving user:", newUser);

        try {
            const savedUser = await User.create(newUser);
            console.log("✅ User saved:", savedUser._id);

            // Stream user upsert
            await upsertStreamUser({
                id: newUser.clerkUserId,
                name: newUser.name,
                image: newUser.profileImage
            });

            return { success: true, userId: savedUser._id };
        } catch (error) {
            console.error("❌ Error saving user:", error);
            throw error;
        }
    }
);

//! deleting the user from database
const deleteUserFromDB = inngest.createFunction(
    {id: "delete-User-From-DB"},
    {event:"clerk/user.deleted"},
    async ({event}) =>{
        await connectDB()

        const {id} = event.data
    await User.deleteOne({clerkUserId:id})

    // delete data from stream
    await deleteStreamUser(id.toString())
    }
)

export const functions = [syncUser,deleteUserFromDB]