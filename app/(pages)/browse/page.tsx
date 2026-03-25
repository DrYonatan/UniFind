import BrowseSideBar from "@/app/components/browse-side-bar";
import UniversityCard from "@/app/components/university-card";
import { fetchUniversitiesFromWikidata } from "@/app/lib/universities";
import { University } from "@/app/types/university";

export default async function BrowsePage(props: {
  searchParams?: Promise<{
    q?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const universities: University[] = await fetchUniversitiesFromWikidata();

  if (universities.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-lg text-gray-500">No universities found.</p>
      </div>
    );
  }

  return (
    <div className="h-full flex">
      <BrowseSideBar />
      <div className="flex flex-col items-center gap-6 p-6 w-2/3 bg-gray-100 mx-10 overflow-y-scroll">
        {universities.map((university: University, index: number) => {
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
                description={university.location}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
