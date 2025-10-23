import Image from "next/image";

import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
export default function MovieCard({ movie }) {
  return (
   <>
   <Link href={`/movie/${movie.id}`}>
  <div className="cursor-pointer hover:scale-105 transition-transform">
   
 <div className="bg-gray-900 rounded-lg p-3 shadow-lg text-white hover:scale-105 transition">
      <Image
        src={movie.poster_path 
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "/images/No-Poster.png" // ✅ Fallback image
          }
        alt={movie.title || "No title"}
        height={400}
        width={300}
        priority={true}
        className="rounded-md mb-3"
      />
    <h3 className="text-lg font-semibold">{movie.title}</h3>
    <div className="flex  flex-wrap items-center justify-start gap-2 text-sm text-gray-300">
  <p className="flex items-center gap-1">
    <FaRegStar className="text-yellow-400" />
    {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
  </p>
  <span>•</span>
  <span className="uppercase">{movie.original_language || "N/A"}</span>
  <span>•</span>
  <span>{movie.release_date ? movie.release_date.split("-")[0] : "—"}</span>
</div>

    </div>
  </div>
</Link>

   </>
  );
}
