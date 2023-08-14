import express from "express";
import { getUser, saveUser } from "../controllers/UserController.js";

const router = express.Router();

router.get("/login", getUser);
router.post("/register", saveUser);

export default router;
