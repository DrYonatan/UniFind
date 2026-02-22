import { logout } from "@/app/actions/auth";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          {/* Profile Picture */}
          <div className="relative w-28 h-28">
            <img
              src="https://via.placeholder.com/120"
              alt="Profile Picture"
              className="rounded-full object-cover border-4 border-gray-200 shadow-md"
            />
          </div>

          {/* Username */}
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">JohnDoe</h2>

          {/* Email */}
          <p className="text-gray-500 mt-1">johndoe@example.com</p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200"></div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="w-full cursor-pointer bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 rounded-xl transition duration-200 shadow-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
