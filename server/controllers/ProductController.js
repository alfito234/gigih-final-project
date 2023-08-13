import Product from "../models/ProductModel.js";
import Video from "../models/VideoModel.js";

export const getProducts = async (req, res) => {
  try {
    const video_id = req.params.id;
    const products = await Product.find({ video_id: video_id }).exec();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const video_id = req.params.id;
    const video = await Video.findById(video_id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    const insertProduct = await product.save();
    res.status(201).json(insertProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
