🎬 Movie Explorer App

A sleek Next.js movie discovery app powered by The Movie Database (TMDB) API.
Users can explore trending movies, search for specific titles, and view movie posters — all with smooth UI transitions, skeleton loaders, and error handling.

🚀 Features

✅ Trending Movies:
Automatically fetches and displays trending movies from TMDB.

✅ Search Functionality:
Search any movie title in real-time with debounce optimization.

✅ Dynamic Image Handling:
Uses TMDB image base URL and fallback image when posters are missing.

✅ Skeleton Loaders:
Beautiful loading skeletons (via shadcn/ui) while movies are fetched.

✅ Error Handling:
Displays friendly error messages (e.g., invalid query or failed API request) and clears them once a valid search is made.

✅ Auto Refresh:
Trending movies auto-refresh periodically to stay up-to-date.

🛠️ Tech Stack

Next.js 14+ (React Framework)

Tailwind CSS (Styling)

shadcn/ui (UI components & skeleton loaders)

TMDB API (Movie data)

JavaScript (No TypeScript)

⚙️ *Installation*

#.Clone the repository:
git clone https://github.com/yourusername/movie-explorer.git
cd movie-explorer

#.Install dependencies:
npm install

#.Create environment variables:
Inside the project root, create a file named .env.local and add:
TMDB_API_KEY=your_tmdb_api_key_here
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here

#.Run the development server:
npm run dev
Then open http://localhost:3000
 in your browser.


Project Structure
 /app
 ├── api/
 │    ├── movies/route.js          # Fetch trending movies
 │    └── search/route.js          # Handle search queries
 ├── components/
 │    ├── MovieCard.js             # Single movie card
 │    └── SkeletonLoader.js        # Loading skeletons
 ├── page.js                       # Main UI (Movie list, search bar, etc.)
/public
 └── fallback.jpg                  # Default poster image
next.config.js                     # Image domain config (image.tmdb.org)


🧠 Environment Setup Notes
In next.config.js, make sure you allow TMDB’s image domain:
images: {
  domains: ["image.tmdb.org"],
},

🧩 API Reference
    Base URL:https://api.themoviedb.org/3


    Popular endpoints used:
      /trending/movie/week
      /search/movie?query=your_query

      💡 Troubleshooting
      Invalid API Key (401 Unauthorized):
      Ensure your .env.local file contains a valid TMDB API key.

      Images Not Displaying:
      Add "image.tmdb.org" to your next.config.js under images.domains.

      Movies Not Updating:
      The app uses auto-refresh logic; if it still fails, try a manual refresh or check your API rate limit.
    
🧑‍💻 Author
Idris Mutolib
Frontend Developer passionate about building sleek, fast, and intuitive user interfaces.
🚀 GitHub: @drspine1
portfolio:https://taleeb-portfolio.vercel.app/
<!-- ## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. --> 
