import Content from "@/app/models/Content";
import { fetchTMDBDetails } from "./tmdb";

export async function ensureContentExists(tmdbId: string) {
  let content = await Content.findOne({ tmdbId });

  if (!content) {
    const data = await fetchTMDBDetails(tmdbId);

    content = await Content.create({
      tmdbId,
      ...data,
    });
  }

  return content;
}