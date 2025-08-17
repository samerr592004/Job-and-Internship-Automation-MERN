import express from "express";
import dotenv from "dotenv";
import testRoutes from "./routes/test.route.js";
import connectDB from './config/db.js';
import authRoutes from "./routes/auth.route.js";



// Load environment variables
dotenv.config();

// Create app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/test", testRoutes);
app.use("/api/auth",authRoutes)

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

//Database Connection
connectDB();
// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

