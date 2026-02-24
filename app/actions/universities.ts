"use server";

import { getCurrentUser } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";
import { User } from "@/app/types/user";

export async function joinUniversity(universityId: string) {
  const user: User | null = await getCurrentUser();

  if (!user) throw new Error("User not authenticated");

  await prisma.user.update({
    where: { id: user.id },
    data: { attendedUniversityId: universityId },
  });
}
