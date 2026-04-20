import { prisma } from "@/app/lib/prisma";

export async function getStudentCountByUniversity(
  universityId: string,
): Promise<number> {
  const count = await prisma.user.count({
    where: {
      attendedUniversityId: universityId,
    },
  });

  return count;
}
