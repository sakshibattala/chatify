import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const MONGODB_URI = ENV.MONGODB_URI;
    if (!MONGODB_URI) {
      throw new Error("MONGO_URI is not set");
    }

    const connection = await mongoose.connect(MONGODB_URI);
    console.log("connected to MONGODB ", connection.connection.host);
  } catch (error) {
    console.log("Error while connecting to MONGODB");
    process.exit(1);
  }
};
