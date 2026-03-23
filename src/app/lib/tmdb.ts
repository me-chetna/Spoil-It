const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = process.env.TMDB_BASE_URL;

export async function fetchFromTMDB(endpoint: string) {
  const separator = endpoint.includes("?") ? "&" : "?";

  const url = `${BASE_URL}${endpoint}${separator}api_key=${API_KEY}&language=en-US`;

  console.log("TMDB URL:", url); // 👈 DEBUG

  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    console.log("TMDB ERROR:", errorText);
    throw new Error("TMDB fetch failed");
  }

  return res.json();
}