import DegreeFilter from "@/app/components/degree-filter";

export default async function UniversityLoading() {
  return (
    <div className="h-full bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row gap-6 h-full">
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900"></h1>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4"></div>

          <DegreeFilter />
        </div>

        <div className="flex-1 bg-white rounded-2xl shadow-md p-8"></div>
      </div>
    </div>
  );
}
