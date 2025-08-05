import express from 'express';
import authRoutes from './routes/auth.route.js';

import dotenv from 'dotenv';
import {connectDB} from './lib/db.js';

dotenv.config(); // Load environment variables
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()) //

app.get("/", (req, res) => {
  res.send("API is running");
});
// Use correct route prefix with "/"
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}` );
    connectDB();
});
