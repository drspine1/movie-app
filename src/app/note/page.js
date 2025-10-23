"use client";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Film } from "lucide-react";

export default function NotePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-gray-200 p-6 text-center">
      
      {/* Back Home */}
      <Link
        href="/"
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors"
      >
        <IoIosArrowRoundBack className="text-2xl" />
        <span className="font-medium">Back Home</span>
      </Link>

      {/* Content */}
      <div className="max-w-xl space-y-6">
        <div className="flex justify-center">
          <Film className="text-blue-400 w-16 h-16" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          🎬 Note About This App
        </h1>
        <p className="text-gray-400 leading-relaxed">
          This app is <span className="text-white font-semibold">not a movie streaming platform</span>.  
          You can explore trending and popular movies, check their details, and discover new titles you might love.
        </p>
        <p className="text-gray-400 leading-relaxed">
          If you find a movie that interests you, simply copy its name and search it on  
          <span className="text-red-400 font-medium"> YouTube</span>,  
          <span className="text-yellow-400 font-medium"> Netflix</span>,  
          or your favorite movie platform to watch it.
        </p>
        <p className="text-gray-500 italic">
          — Made for movie discovery and entertainment lovers 🎥
        </p>
      </div>
    </div>
  );
}
