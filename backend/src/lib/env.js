import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  RESEND_EMAIL_API_KEY: process.env.RESEND_EMAIL_API_KEY,
  EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
  EMAIL_FROM: process.env.EMAIL_FROM,
  CLIENT_URL: process.env.CLIENT_URL,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_CLOUD_API_KEY: process.env.CLOUDINARY_CLOUD_API_KEY,
  CLOUDINARY_CLOUD_API_SECRET: process.env.CLOUDINARY_CLOUD_API_SECRET,
  ARCJET_API_KEY: process.env.ARCJET_API_KEY,
  ARCJET_ENV: process.env.ARCJET_ENV,
};
