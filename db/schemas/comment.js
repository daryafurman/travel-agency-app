import mongoose from "mongoose";

const { Schema } = mongoose;

const commentsSchema = new Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
});

const Comment =
  mongoose.models.comments || mongoose.model("comments", commentsSchema);

export default Comment;
