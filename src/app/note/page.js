"use client";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Film } from "lucide-react";
import { motion } from "framer-motion";

export default function NotePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-gray-200 p-6 text-center overflow-hidden">
      
      {/* Back Home (slide in from left) */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute top-6 left-6"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors duration-200 font-medium"
        >
          <IoIosArrowRoundBack className="text-2xl" />
          <span>Back Home</span>
        </Link>
      </motion.div>

      {/* Content (zoom in) */}
      <motion.div
        initial={{ scale: 0.25, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-xl space-y-6"
      >
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
      </motion.div>
    </div>
  );
}
