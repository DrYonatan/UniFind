export async function fetchUniversitiesFromWikidata() {
  const query = `SELECT ?university ?universityLabel ?countryLabel ?location WHERE {
      ?university wdt:P31 wd:Q3918.
      ?university wdt:P17 ?country.
      ?university wdt:P625 ?location.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
    }
    LIMIT 200
  `;

  const url: string = "https://query.wikidata.org/sparql";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/sparql-query",
      Accept: "application/json",
      "User-Agent": "MyNextApp/1.0 (your-email@example.com)",
    },
    body: query,
  });

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
}
