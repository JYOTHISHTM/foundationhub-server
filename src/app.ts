import express from "express";
import cors from "cors";
import bubbleRoutes from "./routes/bubblesRoute.js";
import noteRoutes from "./routes/notesRoute.js";
import { connectDB } from "./config/dataBase.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/bubbles", bubbleRoutes);
app.use("/notes", noteRoutes);

// Connect to DB
connectDB();

export default app;
