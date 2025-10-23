import { notFound } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link"
export default async function MoviePage({ params }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
  const movie = await res.json();

  if (!movie.id) return notFound();

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4 text-gray-200">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="mx-auto rounded-lg mb-4"
      />
      <p className="text-gray-300 mb-2">{movie.overview}</p>
      <p className="text-yellow-400">⭐ {movie.vote_average.toFixed(2)}</p>


      <Link
      href="/"
      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 font-medium transition-colors duration-200 mt-4"
    >
      <IoIosArrowRoundBack className="text-2xl" />
      <span className="text-base">Back Home</span>
    </Link>

    </div>
  );
}
