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

    const user = await prisma.user.findUnique({
      where: {
        id: payload.userId as string,
      },
      include: {
        attendedUniversity: true,
      },
    });

    if (user == null) return null;

    const university = user.attendedUniversity
      ? {
          id: user.attendedUniversity.id,
          name: user.attendedUniversity.name,
          country: user.attendedUniversity.country
            ? user.attendedUniversity.country
            : "Unknown",
          degrees: [],
        }
      : undefined;

    const res: User = {
      username: user?.username as string,
      email: user?.email as string,
      id: user?.id as string,
      attendedUniversity: university,
      joinedAt: user?.joinedAt as Date,
    };

    return res;
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
