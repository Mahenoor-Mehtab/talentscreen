import express from 'express'
import path from 'path'
import {ENV} from './lib/env.js'
import { fileURLToPath } from 'url';
import connectDB from './lib/db.js'

connectDB()

// ES Module __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Health check
app.get('/health', (req, res) => {
    res.json({status: 'ok', timestamp: new Date()});
});

// API Routes - PEHLE define karo
app.get('/api', (req, res) => {
    res.json({msg:'Server is running', env: ENV.NODE_ENV});
});

app.get('/books',(req, res)=>{
    res.json({msg:'this is the book endpoint'});
});

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

// Start server
const PORT = ENV.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`Environment: ${ENV.NODE_ENV}`);
});