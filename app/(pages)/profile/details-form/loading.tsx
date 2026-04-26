export default async function DetailsFormLoading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-6 w-150 bg-gray-100 p-6 rounded-xl animate-pulse">
        {/* Title */}
        <div className="h-8 w-32 bg-gray-300 rounded self-center" />

        {/* Birth Year */}
        <div>
          <div className="h-4 w-24 bg-gray-300 rounded mb-2" />
          <div className="h-10 w-full bg-gray-300 rounded" />
        </div>

        {/* University */}
        <div>
          <div className="h-4 w-28 bg-gray-300 rounded mb-2" />
          <div className="h-5 w-40 bg-gray-300 rounded" />
        </div>

        {/* Hobbies */}
        <div>
          <div className="h-4 w-20 bg-gray-300 rounded mb-2" />
          <div className="h-10 w-full bg-gray-300 rounded" />

          <div className="flex flex-wrap gap-2 mt-3">
            <div className="h-8 w-20 bg-gray-300 rounded-full" />
            <div className="h-8 w-24 bg-gray-300 rounded-full" />
            <div className="h-8 w-16 bg-gray-300 rounded-full" />
          </div>
        </div>

        {/* Button */}
        <div className="h-10 w-full bg-gray-300 rounded" />
      </div>
    </div>
  );
}
