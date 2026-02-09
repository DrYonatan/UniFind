import Link from "next/link";

export default function HeadBar() {
  return (
    <div className="flex h-16 items-center justify-between px-6 shadow-xl w-full">
      <div className="text-lg font-semibold text-gray-900 flex items-center">
        <img src={"/logo.png"} alt="Logo" className="h-15 w-15 mr-2" />
        UniFind
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link
          href="/browse"
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          Browse Universities
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <Link href={"/login"}>
          <button className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
            Log in
          </button>
        </Link>
        <Link href={"/signup"}>
          <button className="rounded-md bg-gray-900 px-4 py-2 text-sm text-white hover:bg-black cursor-pointer">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}
