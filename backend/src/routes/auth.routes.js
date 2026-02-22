import express from "express";
import {
  signup,
  login,
  logout,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { arcjetProtection } from "../middlewares/arcject.middleware.js";

const router = express.Router();

router.use(arcjetProtection);

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

//Hey backend, is this user still authenticated? /check is only to check if user is authenticated
//if yes redirects to home else redirect to login => /check is only for session verification.
//It helps the frontend know the login status.
router.get("/check", protectRoute, (req, res) =>
  res.status(200).json(req.user),
);

export default router;
