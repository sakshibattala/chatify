import express from "express";
import http from "http";
import { Server } from "socket.io";
import { ENV } from "./env.js";
import { socketAuthMiddleware } from "../middlewares/socket.auth.middleware.js";

const app = express();
const server = http.createServer(app);

//socket server
const io = new Server(server, {
  cors: {
    origin: [ENV.CLIENT_URL],
    credentials: true,
  },
});

//apply authentication middleware to all socket connections
io.use(socketAuthMiddleware);


//to get socket id of receiver so that we can emit msg to that receiver
export const getReceiverSocketId = (userId) => {
  return onlineUsers[userId];
};

//object for storing online users
const onlineUsers = {}; //{userId: socketId}

//io.on() is for connecting to socket
io.on("connection", (socket) => {
  console.log(`A user ${socket.user.fullName} connected`, socket.id);

  const userId = socket.userId;
  onlineUsers[userId] = socket.id;

  // io.emit() is used to send events to all connected clients
  io.emit("getOnlineUsers", Object.keys(onlineUsers));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.user.fullName);
    delete onlineUsers[userId];
    io.emit("getOnlineUsers", Object.keys(onlineUsers));
  });
});

export { server, app, io };
