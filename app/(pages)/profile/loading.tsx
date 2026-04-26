import LoadingSpinner from "@/app/components/loading-components/loading-spinner";

export default async function ProfileLoading() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
