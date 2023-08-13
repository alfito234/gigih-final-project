import mongoose from "mongoose";

const Product = mongoose.Schema({
  video_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  thumbnail_url: {
    type: String,
    required: true,
  },
  product_link: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Products", Product);
