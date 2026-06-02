import { University } from "@/app/types/university";
import { useSearchParams } from "next/dist/client/components/navigation";

export default function Demographics({
  university,
}: {
  university: University;
}) {
  const searchParams = useSearchParams();

  const degree = searchParams.get("degree");

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Demographics Overview
        {degree && (
          <span className="text-sm text-gray-500 ml-2">
            ({degree.toUpperCase()} students)
          </span>
        )}
      </h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-xl p-6">
          <p className="text-gray-500 text-sm">Total Students</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {university.demographics?.totalStudents ?? 0}
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <p className="text-gray-500 text-sm">Average age</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {university.demographics?.averageAge}
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <p className="text-gray-500 text-sm">Average Psychometry</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {university.demographics?.averagePsychometry ?? 0}
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <p className="text-gray-500 text-sm">Acceptance Rate</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">5%</p>
        </div>
      </div>
    </div>
  );
}
