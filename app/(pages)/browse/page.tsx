import BrowseSideBar from "@/app/components/browse-side-bar";
import UniversityCard from "@/app/components/university-card";
import { University } from "@/app/types/university";

export default async function BrowsePage(props: {
  searchParams?: Promise<{
    q?: string;
  }>;
}) {
  const searchParams = await props.searchParams;

  const universities: University[] = [
    {
      id: "1",
      name: "Harvard University",
      location: "Cambridge, MA",
    },
    {
      id: "2",
      name: "Stanford University",
      location: "Stanford, CA",
    },
    {
      id: "3",
      name: "Stanford University",
      location: "Stanford, CA",
    },
    {
      id: "4",
      name: "Stanford University",
      location: "Stanford, CA",
    },
    {
      id: "5",
      name: "Stanford University",
      location: "Stanford, CA",
    },
  ];

  return (
    <div className="h-full flex">
      <BrowseSideBar />
      <div className="flex flex-col items-center gap-6 p-6 w-2/3 bg-gray-100 mx-10 overflow-y-scroll">
        {universities.map((university) => {
          if (
            university.name
              .toLowerCase()
              .includes(searchParams?.q?.toLowerCase() || "")
          ) {
            return (
              <UniversityCard
                key={university.id}
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
