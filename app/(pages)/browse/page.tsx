import BrowseSideBar from "@/app/components/browse-side-bar";
import { UniversityListSkeleton } from "@/app/components/skeletons/university-list-skeleton";
import { UniversityList } from "@/app/components/university-list";
import { Suspense } from "react";

export default async function BrowsePage(props: {
  searchParams?: Promise<{
    q?: string;
    countries?: string;
  }>;
}) {
  const searchParams = await props.searchParams;

  return (
    <div className="h-full flex">
      <BrowseSideBar />
      <Suspense fallback={<UniversityListSkeleton />}>
        <UniversityList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
