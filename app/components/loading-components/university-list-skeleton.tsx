import { UniversityCardSkeleton } from "@/app/components/loading-components/university-card-skeleton";

export function UniversityListSkeleton() {
  return (
    <div className="flex flex-col items-center gap-6 p-6 w-2/3 bg-gray-100 mx-10 overflow-y-scroll">
      {Array.from({ length: 5 }).map((_, index) => (
        <UniversityCardSkeleton key={index} />
      ))}
    </div>
  );
}
