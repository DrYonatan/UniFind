import UniversityCard from "@/app/components/university-card";
import { fetchUniversitiesFromWikidataFiltered } from "@/app/lib/universities";
import { University } from "@/app/types/university";
import { UniversityFilter } from "@/app/types/university-filter";

export async function UniversityList({
  searchParams,
}: {
  searchParams?: { q?: string; countries?: string };
}) {
  const parseSearchParams = (
    params:
      | {
          q?: string;
          countries?: string;
        }
      | undefined,
  ): UniversityFilter => {
    return {
      query: params?.q,
      countries: params?.countries?.split(",").filter(Boolean),
    };
  };

  const universities: University[] =
    await fetchUniversitiesFromWikidataFiltered(
      parseSearchParams(searchParams),
    );

  return (
    <div className="flex flex-col items-center gap-6 p-6 w-2/3 bg-gray-100 mx-10 overflow-y-scroll">
      {universities.length != 0 ? (
        universities.map((university: University, index: number) => {
          if (
            university.name
              .toLowerCase()
              .includes(searchParams?.q?.toLowerCase() || "")
          ) {
            return (
              <UniversityCard
                key={index}
                id={university.id}
                title={university.name}
                description={university.country}
              />
            );
          } else {
            return null;
          }
        })
      ) : (
        <p className="text-lg text-gray-500">No universities found.</p>
      )}
    </div>
  );
}
