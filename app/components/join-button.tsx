import { joinUniversity, leaveUniversity } from "@/app/actions/universities";
import { getCurrentUser } from "@/app/lib/auth";

export async function JoinButton({ universityId }: { universityId: string }) {
  const user = await getCurrentUser();

  if (!user) return null;

  const isJoined = user.attendedUniversity?.id == universityId;

  const joinWithId: () => Promise<void> = joinUniversity.bind(
    null,
    universityId,
  );

  const leaveWithId: () => Promise<void> = leaveUniversity.bind(null);

  return isJoined ? (
    <form action={leaveWithId}>
      <button className="bg-black text-white rounded w-24 h-10 self-center cursor-pointer hover:bg-gray-800 transition">
        Leave
      </button>
    </form>
  ) : (
    <form action={joinWithId}>
      <button className="bg-black text-white rounded w-24 h-10 self-center cursor-pointer hover:bg-gray-800 transition">
        Join
      </button>
    </form>
  );
}
