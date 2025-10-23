


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton"; // ✅ Shadcn Skeleton
import MovieCard from "./movieCard";
import SearchBar from "./searchBar";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  

  // ✅ Fetch all movies from TMDB
  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch("/api/movies");
      if (!res.ok) throw new Error("Failed to fetch movies");
      const data = await res.json();
      setMovies(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Fetch trending movies from MongoDB
  const fetchTrending = async () => {
    try {
      const res = await fetch("/api/trending");
      if (!res.ok) throw new Error("Failed to fetch trending");
      const data = await res.json();
      setTrending(data || []);
    } catch (err) {
      console.error("Error fetching trending:", err);
    }
  };


  
//   // Handle search input
  async function handleSearch(query) {
    setError(null);

    if (!query.trim()) return;
    try {
      const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
      const data = await res.json();

      if (data.results.length > 0) {
        setMovies(data.results);
          setError(null);

        // Save top searches to DB
        await fetch("/api/trending", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: data.results[0].title,
            poster_path: data.results[0].poster_path,
          }),
        });
      } else {
        setError("No movies found for this search.");
      }
    } catch {
      setError("Error searching movies.");
    }
  }


  useEffect(() => {
    fetchMovies();
    fetchTrending();
      const interval = setInterval(() => {
    fetchTrending();
  }, 15000); // every 15 seconds

  return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6"><span className="text-blue-600">🎬</span> Movie Explorer</h1>
   <SearchBar onSearch={handleSearch} />

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-center mb-4 font-medium">
          ⚠️ {error}
        </p>
      )}

      {/* Trending Movies */}
      <section className="my-10 ">
        <h2 className="text-2xl font-semibold mb-4">🔥 Trending Movies</h2>
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-60 w-full rounded-lg bg-gray-800" />
            ))}
          </div>
        ) : trending.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {trending.map((movie) => {
            return <MovieCard movie={movie} key={movie._id}/>
            })}
          </div>
        ) : (
          <p className="text-gray-400 text-center">No trending movies found</p>
        )}
      </section>

      {/* All Movies */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🎥 All Movies</h2>
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <Skeleton key={i} className="h-60 w-full rounded-lg bg-gray-800" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {movies.map((movie) =>{
         return   <MovieCard movie={movie} key={movie.id}/>
            })}
          </div>
        )}
      </section>
    </div>
  );
}
