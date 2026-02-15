export default function Demographics() {
  return (
    <div>
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
  );
}
