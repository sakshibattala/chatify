import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import authRoutes from "./routes/auth.route.js";

const app = express();

const __dirname = path.resolve();

app.use("/auth", authRoutes);

// Production mode: serve React
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist");
  app.use(express.static(frontendPath));

  // Serve index.html for any unknown route
  app.get("*", (_, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("app is listening on port:", PORT));
