import { getCurrentUser } from "@/app/lib/auth";

export async function JoinButton({ universityId }: { universityId: string }) {
  const user = await getCurrentUser();

  if (!user) return null;

  const isJoined = user.attendedUniversity?.id == universityId;

  return isJoined ? (
    <button className="bg-black text-white rounded w-24 h-10 self-center cursor-pointer hover:bg-gray-800 transition">
      Leave
    </button>
  ) : (
    <button className="bg-black text-white rounded w-24 h-10 self-center cursor-pointer hover:bg-gray-800 transition">
      Join
    </button>
  );
}
