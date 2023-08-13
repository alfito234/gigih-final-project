import mongoose from "mongoose";

const Comment = mongoose.Schema({
  video_id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export default mongoose.model("Comments", Comment);
