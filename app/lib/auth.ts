import { prisma } from "@/app/lib/prisma";
import { decrypt } from "@/app/lib/session";
import { User } from "@/app/types/user";
import { JWTPayload } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getCurrentUser(): Promise<User | null> {
  try {
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
  } catch (error) {
    console.error("Error in getCurrentUser:", error);
    return null;
  }
}

export async function requireUser(): Promise<User> {
  const user: User | null = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

export async function isLoggedIn(): Promise<boolean> {
  const user: User | null = await getCurrentUser();
  return !!user;
}
