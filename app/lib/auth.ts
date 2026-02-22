import { prisma } from "@/app/lib/prisma";
import { decrypt } from "@/app/lib/session";
import { User } from "@/app/types/user";
import { JWTPayload } from "jose";
import { cookies } from "next/headers";

export async function getCurrentUser(): Promise<User | null> {
  const session: string | undefined = (await cookies()).get("session")?.value;
  const payload: JWTPayload | undefined = await decrypt(session);

  if (!session || !payload) return null;

  if (!payload.userId) return null;

  const user: User | null = await prisma.user.findUnique({
    where: {
      id: payload.userId as string,
    },
  });

  return user;
}
