"use server";

import { prisma } from "@/app/lib/prisma";
import { requireUser } from "@/app/lib/auth";
import { Hobby } from "@/app/types/hobby";

export async function saveUserDetails(birthYear: number, hobbies: Hobby[]) {
  const user = await requireUser();

  // Ensure hobbies exist
  const hobbyRecords = await Promise.all(
    hobbies.map((hobby) =>
      prisma.hobby.upsert({
        where: { name: hobby.name },
        update: {},
        create: { name: hobby.name },
      }),
    ),
  );

  // Update user + connect hobbies
  await prisma.user.update({
    where: { id: user.id },
    data: {
      birthYear,
      hobbies: {
        set: [], // optional: clears old hobbies first
        connect: hobbyRecords.map((h) => ({ id: h.id })),
      },
    },
  });
}
