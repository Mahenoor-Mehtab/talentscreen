import { StreamChat } from "stream-chat";
import {StreamClient} from '@stream-io/node-sdk'
import { ENV } from "./env.js";

const apiKey =ENV.STREAM_API_KEY
const apiSecret =ENV.STREAM_API_SECRET

if(!apiKey || !apiSecret){
    console.error("STREAM_API_KEY or STREAM_API_SECRET is missing")
}

export const streamClient = new StreamClient(apiKey , apiSecret); // this will be used for video calls

export const chatClient = StreamChat.getInstance(
apiKey, apiSecret ); // this will used for chat features

export const upsertStreamUser = async (userData)=>{
    try{
        await chatClient.upsertUser(userData);
        console.log("Stream user upserted successfully:", userData);
    }catch(error){
        console.log("Error upserting Stream user:", error);
    }
}

export const deleteStreamUser = async (userId)=>{
    try{
        await chatClient.deleteUser(userId);
        console.log("Stream user Deleted successfully:", userId);
    }catch(error){
        console.log("Error deleting Stream user:", error);
    }
}

