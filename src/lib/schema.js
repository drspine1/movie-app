import { connectDB } from "@/lib/db";
import mongoose from "mongoose";

const TrendingSchema = new mongoose.Schema({
  title: String,
  poster_path: String,
  searchCount: { type: Number, default: 1 },
});

const Trending = mongoose.models.Trending || mongoose.model("Trending", TrendingSchema)
export default Trending