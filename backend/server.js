import express from "express";
import dotenv from "dotenv";
import testRoutes from "./routes/test.route.js";


// Load environment variables
dotenv.config();

// Create app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/test", testRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
