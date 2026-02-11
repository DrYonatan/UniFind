export default function UniversityPage() {
  return (
    <div className="h-full bg-gray-100 p-6">
      <div className="flex gap-6 h-full">
        <div className="w-1/3 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Harvard University
            </h1>
            <p className="text-gray-600 mt-2">Cambridge, Massachusetts, USA</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition">
                Demographics
              </button>
              <button className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition">
                Weather
              </button>
              <button className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition">
                Student Life
              </button>
              <button className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition">
                Rankings
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Demographics Overview
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-500 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">23,000</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-500 text-sm">International Students</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">25%</p>
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
      </div>
    </div>
  );
}
