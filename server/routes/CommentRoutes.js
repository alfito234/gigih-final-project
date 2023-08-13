import express from "express";
import { getComments, saveComment } from "../controllers/CommentController.js";

const router = express.Router();

router.get("/videos/:id/comment", getComments);
router.post("/videos/:id/comment", saveComment);

export default router;
