import mongoose from "mongoose";

const { Schema } = mongoose;

const placeSchema = new Schema({
  // _id: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  description: { type: String, required: true },
  comments: [{ type: String, required: true }],
});

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

export default Place;
