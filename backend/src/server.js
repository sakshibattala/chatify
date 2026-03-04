import express from "express";
import path from "path";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";

const __dirname = path.resolve();

//middlewares
app.use(express.json({ limit: "15mb" }));

app.use(
  cors({
    origin: ENV.CLIENT_URL, // "http://localhost:5173"
    credentials: true,
  }),
);

//  This line FIXES your error
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// app.get("/", (req, res) => {
//   res.json({ message: "app is up and running" });
// });

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
server.listen(PORT, () => {
  console.log("app is listening on port:", PORT);
  connectDB();
});
