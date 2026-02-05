import express from 'express'
import path from 'path'
import {ENV} from './lib/env.js'
import { fileURLToPath } from 'url';
import connectDB from './lib/db.js'
import cors from 'cors'
import { serve } from "inngest/express";
import { inngest, functions } from "./lib/inngest.js"
import { clerkMiddleware } from '@clerk/express'
import chatRoutes from './routes/chatRoutes.js';


// ES Module __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());

// creadentials:true meaning?? => server allows a browzer to include cookies on request
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ENV.CLIENT_URL, // allowed domains
    methods: ["GET", "POST", "PUT", "DELETE"], // allowed HTTP methods
    credentials: true // cookies / auth headers allow
  })
);

app.use(clerkMiddleware()) // this adds auth feild to request object: req.auth()


// API Routes - inngest 
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes)



// Production deployment
if(ENV.NODE_ENV === "production"){
    const frontendPath = path.resolve(__dirname, '../../frontend/dist');
    
    console.log('Serving frontend from:', frontendPath);

    // Static files middleware
    app.use(express.static(frontendPath));

    // ✅ Express v5 wildcard syntax - do NOT use parentheses
    app.get('/', (req, res) => {
        res.sendFile(path.join(frontendPath, 'index.html'));
    });
}

// Start server only after DB connection is established
const PORT = ENV.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`✅ Server running on port ${PORT}`);
            console.log(`Environment: ${ENV.NODE_ENV}`);
        });
    } catch (error) {
        console.error('Failed to start server due to DB connection error:', error);
        process.exit(1);
    }
};

startServer();