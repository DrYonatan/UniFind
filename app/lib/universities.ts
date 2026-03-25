import { prisma } from "@/app/lib/prisma";

type ApiUniversity = {
  id: string;
  name: string;
  country?: string;
};

const translateFromWikidata = (item: any): ApiUniversity => {
  return {
    id: item.results.bindings[0].university.value.split("/").pop(),
    name: item.results.bindings[0].universityLabel.value,
    country: item.results.bindings[0].countryLabel?.value ?? "Unknown",
  };
};

const url: string = "https://query.wikidata.org/sparql";

export async function fetchUniversitiesFromWikidata() {
  try {
    const query = `SELECT ?university ?universityLabel ?countryLabel ?location WHERE {
      ?university wdt:P31 wd:Q3918.
      ?university wdt:P17 ?country.
      ?university wdt:P625 ?location.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
    }
    LIMIT 200
  `;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/sparql-query",
        Accept: "application/json",
        "User-Agent": "MyNextApp/1.0 (your-email@example.com)",
      },
      body: query,
    });

    if (!res.ok) {
      throw new Error("Failed to fetch universities from Wikidata");
    }

    const data = await res.json();

    return data.results.bindings.map((item: any) => {
      const point = item.location.value; // "Point(-71.1167 42.3770)"
      const match = point.match(/Point\(([-\d.]+) ([-\d.]+)\)/);

      return {
        id: item.university.value.split("/").pop(),
        name: item.universityLabel.value,
        country: item.countryLabel?.value ?? "Unknown",
        lng: parseFloat(match[1]),
        lat: parseFloat(match[2]),
      };
    });
  } catch (error) {
    console.error("Error fetching universities from Wikidata:", error);
    return [];
  }
}

export async function getOrCreateUniversity(externalId: string) {
  try {
    let university = await prisma.university.findUnique({
      where: { externalId },
    });

    if (university) {
      return university;
    }

    const apiData = await fetchUniversityFromAPI(externalId);

    const apiUniversity: ApiUniversity = translateFromWikidata(apiData);

    university = await prisma.university.create({
      data: {
        name: apiUniversity.name,
        country: apiUniversity.country,
        externalId: apiUniversity.id,
      },
    });

    return university;
  } catch (error) {
    console.error("Error fetching or creating university:", error);
    return null;
  }
}

async function fetchUniversityFromAPI(id: string) {
  try {
    const query = `
  SELECT ?university ?universityLabel ?countryLabel ?location WHERE {
    BIND(wd:${id} AS ?university)

    ?university wdt:P31 wd:Q3918.
    OPTIONAL { ?university wdt:P17 ?country. }
    OPTIONAL { ?university wdt:P625 ?location. }

    SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
  }
  `;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/sparql-query",
        Accept: "application/json",
        "User-Agent": "MyNextApp/1.0 (your-email@example.com)",
      },
      body: query,
    });

    if (!res.ok) {
      throw new Error("University not found in external API");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching university from API:", error);
    return null;
  }
}
