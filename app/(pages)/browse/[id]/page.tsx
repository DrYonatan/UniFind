import DegreeFilter from "@/app/components/degree-filter";
import { JoinButton } from "@/app/components/join-button";
import UniversityMetrics from "@/app/components/university-metrics";
import { getOrCreateUniversity } from "@/app/lib/universities";
import { University } from "@/app/types/university";
import { Suspense } from "react";

export default async function UniversityPage({ params }: { params: any }) {
  const universityId: string = (await params).id;

  const university: University | null =
    await getOrCreateUniversity(universityId);

  if (university === null) {
    return (
      <div className="h-full bg-gray-100 p-6">
        <div className="flex flex-col md:flex-row gap-6 h-full">
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  University Not Found
                </h1>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-2xl shadow-md p-8">
            <p className="text-lg text-gray-500">
              The university with the specified ID could not be found.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row gap-6 h-full">
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {university?.name}
              </h1>
              <p className="text-gray-600 mt-2">{university?.country}</p>
            </div>
            <Suspense
              fallback={
                <div className="w-24 h-10 self-center rounded bg-gray-300 animate-pulse" />
              }
            >
              <JoinButton universityId={universityId} />
            </Suspense>
          </div>

          <DegreeFilter />
        </div>

        <div className="flex-1 bg-white rounded-2xl shadow-md p-8">
          <UniversityMetrics university={university} />
        </div>
      </div>
    </div>
  );
}
