import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

dotenv.config();

const ENV = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 5000
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'ok', 
        timestamp: new Date(),
        env: ENV.NODE_ENV
    });
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
    console.log('Frontend exists:', existsSync(frontendPath));
    
    if (existsSync(frontendPath)) {
        // Static files middleware
        app.use(express.static(frontendPath));

        // ✅ Fallback middleware - sabse last mein
        app.use((req, res) => {
            res.sendFile(path.join(frontendPath, 'index.html'));
        });
    } else {
        console.error('❌ Frontend dist folder NOT FOUND!');
    }
} else {
    app.get('/', (req, res) => {
        res.json({msg: 'Development mode'});
    });
}

const PORT = ENV.PORT;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`Environment: ${ENV.NODE_ENV}`);
});