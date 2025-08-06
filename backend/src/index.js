import express from 'express';
import authRoutes from './routes/auth.route.js';
import messageRoutes from "./routes/message.route.js"

import dotenv from 'dotenv';
import {connectDB} from './lib/db.js';
import cors from "cors"

dotenv.config(); // Load environment variables
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.get("/", (req, res) => {
  res.send("API is running");
});
// Use correct route prefix with "/"
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}` );
    connectDB();
});
