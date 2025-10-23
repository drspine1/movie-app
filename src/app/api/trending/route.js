import { connectDB } from "@/lib/db";
import Trending from "@/lib/schema";

// GET trending movies
export async function GET() {
  await connectDB();
  const movies = await Trending.find().sort({ searchCount: -1 }).limit(5);
  return Response.json(movies);
}

// POST: save or update trending movie
export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const existing = await Trending.findOne({ title: body.title });

  if (existing) {
    existing.searchCount += 1;
    await existing.save();
    return Response.json(existing);
  }

  const newMovie = new Trending(body);
  await newMovie.save();
  return Response.json(newMovie);
}
