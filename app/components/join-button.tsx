import { joinUniversity } from "@/app/actions/universities";
import { getCurrentUser } from "@/app/lib/auth";

export async function JoinButton({ universityId }: { universityId: string }) {
  const user = await getCurrentUser();

  if (!user) return null;

  const isJoined = user.attendedUniversity?.id == universityId;

  const joinWithId: () => Promise<void> = joinUniversity.bind(
    null,
    universityId,
  );

  return isJoined ? (
    <button className="bg-black text-white rounded w-24 h-10 self-center cursor-pointer hover:bg-gray-800 transition">
      Leave
    </button>
  ) : (
    <form action={joinWithId}>
      <button className="bg-black text-white rounded w-24 h-10 self-center cursor-pointer hover:bg-gray-800 transition">
        Join
      </button>
    </form>
  );
}
