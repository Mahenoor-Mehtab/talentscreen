import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import {ENV} from './lib/env.js'
import { fileURLToPath } from 'url';

dotenv.config();

// ES Module __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api', (req, res) => {
    res.json({msg:'Server is running on 3000'});
});

app.get('/books',(req, res)=>{
      res.json({msg:'this is the book endpoint'});
})

// make out app ready for deployment
if(ENV.NODE_ENV === "production"){
    const rootDir = path.resolve(__dirname, '../../');

  const frontendPath = path.join(rootDir, 'frontend/dist');

   console.log('Serving frontend from:', frontendPath);

    app.use(express.static(frontendPath));

    app.get('*any', (req, res) => {
        res.sendFile(path.join(frontendPath, 'index.html'));
    });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});