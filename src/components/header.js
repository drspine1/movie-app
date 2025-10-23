import Image from "next/image";
import Link from "next/link"
import { Info } from "lucide-react";
export default function Header() {

  return (
    <header   className="relative bg-cover bg-center h-screen flex items-center justify-center"
  style={{ backgroundImage: "url('/images/BG.png')" }}
    >
      
       <div className=" bg-opacity-60 p-2 rounded-lg">
      <Image
        src="/images/hero-img.png"
        alt="Movie App Logo"
        width={600}
        height={400}
        priority={true}
        className="mx-auto"
      />
      
      <h1 className="text-white text-2xl md:text-4xl md:-mt-20 font-bold text-center">
        Welcome to MovieApp
      </h1>
      <p className="text-white text-center mt-4 text-lg md:text-xl">
        Discover and explore your favorite movies
      </p>
      
       <div   className="mx-auto text-center mt-4">
           <Link
      href="/note"
    
      >
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 capitalize py-1 text-sm font-medium text-white backdrop-blur-3xl">
   about this app
  </span>
</button>
    </Link>
       </div>
       </div>

    </header>
  );
}