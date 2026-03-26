const BASE_URL = process.env.NEXT_PUBLIC_TMDB_PROXY_URL;

export async function fetchFromTMDB(endpoint: string) {
  const url = `${BASE_URL}/api/tmdb${endpoint}`;

  console.log("PROXY URL:", url); // ✅ debug

  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    console.log("TMDB PROXY ERROR:", errorText);
    throw new Error("TMDB proxy fetch failed");
  }

  return res.json();
}