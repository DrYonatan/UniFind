"use client";

import { universityMetrics } from "@/app/lib/university-metrics";
import { University } from "@/app/types/university";
import { UniversityMetric } from "@/app/types/university-metric";

export default function UniversityMetrics({
  university,
}: {
  university: University;
}) {
  const CurrentMetricComponent = universityMetrics[0].component;

  return (
    <div className="flex flex-col">
      <div className="text-xl font-semibold text-gray-900 mb-6 flex gap-4">
        {universityMetrics.map((metric: UniversityMetric, index: number) => (
          <button
            key={index}
            className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800 font-medium hover:cursor-pointer hover:bg-gray-300 transition"
          >
            {metric.label}
          </button>
        ))}
      </div>

      <div className="bg-gray-300= w-full h-full">
        <CurrentMetricComponent university={university} />
      </div>
    </div>
  );
}
