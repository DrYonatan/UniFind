"use client";

import { universityMetrics } from "@/app/lib/university-metrics";
import { University } from "@/app/types/university";
import { UniversityMetric } from "@/app/types/university-metric";
import { useState } from "react";

export default function UniversityMetrics({
  university,
}: {
  university: University;
}) {
  const [currentMetric, setCurrentMetric] = useState<UniversityMetric>(
    universityMetrics[0],
  );

  let CurrentMetricComponent = currentMetric.component;

  const onMetricChange = (metric: UniversityMetric) => {
    setCurrentMetric(metric);
    CurrentMetricComponent = metric.component;
  };

  return (
    <div className="flex flex-col">
      <div className="text-xl font-semibold text-gray-900 mb-6 flex gap-4">
        {universityMetrics.map((metric: UniversityMetric, index: number) => (
          <button
            key={index}
            className={`${currentMetric.label === metric.label ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-800"} px-4 py-2 rounded-xl font-medium hover:cursor-pointer transition`}
            onClick={() => onMetricChange(metric)}
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
