const BASE_URL = process.env.NEXT_PUBLIC_TMDB_PROXY_URL;

export async function fetchFromTMDB(path: string) {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`TMDB API error: ${response.status}`);
  }
  return response.json();
}

// 🔥 NEW: Fetch FULL details for ML
export async function fetchTMDBDetails(tmdbId: string) {
  try {
    // movie details
    const details = await fetchFromTMDB(`/movie/${tmdbId}`);

    // credits (actors)
    const credits = await fetchFromTMDB(`/movie/${tmdbId}/credits`);

    return {
      title: details.title || details.name,

      genres: details.genres?.map((g: { name: string }) => g.name) || [],

      actors:
        credits.cast?.slice(0, 5).map((a: { name: string }) => a.name) || [],

      episodes: details.runtime || 0,

      rating: details.vote_average || 0,
    };
  } catch (err) {
    console.log("❌ fetchFullDetails error:", err);
    return null;
  }
}