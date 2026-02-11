"use client";

import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "@/app/components/search-bar";

export default function BrowseSideBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("q") ?? "";

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex h-full w-1/5 md:w-60 bg-gray-100 shadow-lg py-5 px-2 slide-in-right">
      <SearchBar
        value={query}
        onSearch={handleSearch}
        placeholder="Search universities..."
      />
    </div>
  );
}
