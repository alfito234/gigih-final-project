import express from "express";
import {
  getVideos,
  getVideoById,
  saveVideo,
} from "../controllers/VideoController.js";

const router = express.Router();

router.get("/videos", getVideos);
router.get("/videos/:id", getVideoById);
router.post("/videos/", saveVideo);

export default router;
