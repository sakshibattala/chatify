import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("this is signup page");
});

router.get("/login", (req, res) => {
  res.send("this is login page");
});

export default router;
