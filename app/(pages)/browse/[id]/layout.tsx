import DegreeFilter from "@/app/components/degree-filter";
import { universityMetrics } from "@/app/lib/university-metrics";
import Link from "next/link";

export default async function UniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row gap-6 h-full">
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Harvard University
            </h1>
            <p className="text-gray-600 mt-2">Cambridge, Massachusetts, USA</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="flex gap-3">
              {universityMetrics.map(
                (metric: UniversityMetric, index: number) => (
                  <Link
                    href={metric.slug}
                    key={index}
                    className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition"
                  >
                    {metric.label}
                  </Link>
                ),
              )}
            </div>
          </div>

          <DegreeFilter />
        </div>

        <div className="flex-1 bg-white rounded-2xl shadow-md p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
