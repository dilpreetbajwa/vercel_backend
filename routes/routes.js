import express from "express";
import { register } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/auth/register", register)
// router.post("/auth/login", login)
// router.post("/auth/logout", logout)

export { router as Router };