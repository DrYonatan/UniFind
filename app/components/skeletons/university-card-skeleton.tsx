export function UniversityCardSkeleton() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md w-full md:w-100">
      <div className="h-6 w-2/3 rounded bg-gray-200 animate-pulse" />
      <div className="h-6 w-2/3 rounded bg-gray-200 animate-pulse" />
    </div>
  );
}
