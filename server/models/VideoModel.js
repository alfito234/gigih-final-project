import mongoose from "mongoose";

const Video = mongoose.Schema({
  video_title: {
    type: String,
    required: true,
  },
  video_url: {
    type: String,
    required: true,
  },
  thumbnail_url: {
    type: String,
    required: true,
  },
  shop_name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Videos", Video);
