import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const __dirname = path.resolve();
const PORT = process.env.PORT || 5001; // ✅ Fallback if PORT is undefined

// ✅ Fix for large payloads (e.g., chat messages, profile images, etc.)
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// ✅ CORS setup for frontend deployment
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173", // use env var in production
    credentials: true,
  })
);

app.use(cookieParser());

// ✅ API routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// ✅ Serve frontend (for production)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// ✅ Start server
server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
