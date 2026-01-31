import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

// Middleware
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.json({msg:'Server is running on 3000'});
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});