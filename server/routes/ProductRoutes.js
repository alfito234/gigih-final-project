import express from "express";
import { getProducts, saveProduct } from "../controllers/ProductController.js";

const router = express.Router();

router.get("/videos/:id/product", getProducts);
router.post("/videos/:id/product", saveProduct);

export default router;
