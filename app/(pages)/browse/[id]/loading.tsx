export default function Loading() {
  return (
    <div className="h-full bg-gray-100 p-6 animate-pulse">
      <div className="flex flex-col md:flex-row gap-6 h-full">
        {/* Left column */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          {/* University card */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between">
            <div className="flex flex-col gap-3 w-full">
              {/* University name */}
              <div className="h-6 w-2/3 bg-gray-300 rounded" />

              {/* Country */}
              <div className="h-4 w-1/3 bg-gray-200 rounded" />
            </div>

            {/* Join button */}
            <div className="w-24 h-10 self-center rounded bg-gray-300" />
          </div>

          {/* Degree filter */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
            <div className="h-5 w-1/2 bg-gray-300 rounded" />
            <div className="h-10 w-full bg-gray-200 rounded" />
            <div className="h-10 w-full bg-gray-200 rounded" />
            <div className="h-10 w-full bg-gray-200 rounded" />
          </div>
        </div>

        {/* Right column (metrics) */}
        <div className="flex-1 bg-white rounded-2xl shadow-md p-8 flex flex-col gap-6">
          {/* Title */}
          <div className="h-6 w-1/3 bg-gray-300 rounded" />

          {/* Chart / content blocks */}
          <div className="h-40 w-full bg-gray-200 rounded" />
          <div className="h-40 w-full bg-gray-200 rounded" />
          <div className="h-40 w-full bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
