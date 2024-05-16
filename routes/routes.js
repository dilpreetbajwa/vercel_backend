import express from "express";
import { register , getuser } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/auth/register", register)
router.get("/auth/getusers", getuser);
// router.post("/auth/login", login)
// router.post("/auth/logout", logout)

export { router as Router };