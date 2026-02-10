import dotenv from "dotenv";
dotenv.config();
import express from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("app is listening on port: ", PORT));
