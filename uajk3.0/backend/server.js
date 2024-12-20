import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Import the cors package
import dotenv from 'dotenv'; // Import dotenv to load environment variables
import applicationRoutes from './routes/applications.js';
import authRoutes from './routes/auth.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ // Enable CORS for your frontend origin
  origin: 'http://localhost:5173', // Allow your frontend's origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow specific HTTP methods
  credentials: true, // Allow credentials (if you need them)
}));

app.use(express.json()); // For parsing application/json

// Database connection using MONGO_URI from .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch(err => {
  console.error('MongoDB connection error:', err.message);
});

// Use the routes
app.use('/api/auth', authRoutes);
app.use('/api/applications', applicationRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
