
import express from "express";
import path from "path";
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";

const app = express();

const __dirname = path.resolve();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "app is up and running" });
});

// Production mode: serve React
if (ENV.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist");
  app.use(express.static(frontendPath));

  // Serve index.html for any unknown route
  app.get("*", (_, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

const PORT = ENV.PORT || 5000;
app.listen(PORT, () => {
  console.log("app is listening on port:", PORT);
  connectDB();
});
