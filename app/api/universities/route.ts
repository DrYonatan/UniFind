import { fetchUniversitiesFromWikidata } from "@/app/lib/universities";

export async function GET() {
  const data = await fetchUniversitiesFromWikidata();

  return Response.json(data);
}
