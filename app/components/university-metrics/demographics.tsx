import { University } from "@/app/types/university";

export default function Demographics({
  university,
}: {
  university: University;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Demographics Overview
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
          <p className="text-gray-500 text-sm">Student-Faculty Ratio</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">7:1</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <p className="text-gray-500 text-sm">Acceptance Rate</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">5%</p>
        </div>
      </div>
    </div>
  );
}
