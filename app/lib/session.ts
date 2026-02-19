import "server-only";
import { SessionPayload } from "@/app/lib/definitions";
import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

const secretKey: string = process.env.SESSION_SECRET || "default_secret_key";

const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error: any) {
    console.log("Failed to verify session");
  }
}

export async function createSession(userId: string) {
  const expiresAt: Date = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now
  const session: string = await encrypt({
    userId: userId,
  });
  const cookieStore: ReadonlyRequestCookies = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function updateSession() {
  const session: string | undefined = (await cookies()).get("session")?.value;
  const payload: JWTPayload | undefined = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 60 * 60 * 1000); // Extend session for another hour

  const cookieStore: ReadonlyRequestCookies = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
