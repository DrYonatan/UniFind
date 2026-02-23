import DegreeFilter from "@/app/components/degree-filter";
import { JoinButton } from "@/app/components/join-button";
import { universityMetrics } from "@/app/lib/university-metrics";
import Link from "next/link";
import { Suspense } from "react";

export default async function UniversityLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const universityId: string = (await params).id;

  return (
    <div className="h-full bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row gap-6 h-full">
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Harvard University
              </h1>
              <p className="text-gray-600 mt-2">
                Cambridge, Massachusetts, USA
              </p>
            </div>
            <Suspense
              fallback={
                <div className="w-24 h-10 self-center rounded bg-gray-300 animate-pulse" />
              }
            >
              <JoinButton universityId={universityId} />
            </Suspense>
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
