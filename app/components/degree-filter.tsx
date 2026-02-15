"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DegreeFilter() {
  const pathName: string = usePathname();

  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      <h1 className="text-lg font-semibold text-gray-900">Degrees</h1>
      <Link
        href={{
          pathname: `${pathName}`,
          query: { degree: "cs" },
        }}
      >
        Computer Science
      </Link>
      <div className="flex gap-3 h-60"></div>
    </div>
  );
}
