import jwt from "jsonwebtoken";
import { ENV } from "./env.js";

export const generateToken = async (userId, res) => {
  const JWT_SECRET = ENV.JWT_SECRET;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not set");
  }

  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });

  console.log(token)

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milli sec
    httpOnly: true, //prevent XSS attacks: some cross-site scripting
    sameSite: "strict", // to prevent attcks
    secure: ENV.NODE_ENV === "development" ? false : true,
  });

  return token;
};
