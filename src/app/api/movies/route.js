





export async function GET() {
  const API_KEY = process.env.TMDB_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;

  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
    
      return new Response(JSON.stringify({ error: "TMDB request failed" }), { status: 500 });
    }

    const data = await res.json();
    return Response.json(data.results);
  } catch (error) {

    return new Response(JSON.stringify({ error: "Server error fetching TMDB movies" }), { status: 500 });
  }
}
