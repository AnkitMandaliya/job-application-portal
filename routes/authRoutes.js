import { Router } from "express";
import {register , login } from "../controller/authController.js"

const router =Router()
 router.post("/register",register)
 router.post("/login",login)
router.get("/test", (req, res) => {
  res.send("Auth routes working");
});

export default router