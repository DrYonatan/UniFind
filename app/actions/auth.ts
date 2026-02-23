"use server";

import { SignupFormSchema, FormState } from "@/app/lib/definitions";
import bcrypt from "bcrypt";
import { createSession, deleteSession } from "@/app/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/app/lib/prisma";
import z from "zod";

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: z.treeifyError(validatedFields.error).properties,
    };
  }

  // Call the provider or db to create a user...
  const { name, email, password } = validatedFields.data;

  try {
    const hashedPassword: string = await bcrypt.hash(password, 10);
    const data = await prisma.user.create({
      data: {
        username: name,
        email,
        password: hashedPassword,
        attendedUniversity: "",
        joinedAt: new Date(Date.now()),
      },
    });

    await createSession(data.id);

    redirect("/");
  } catch (error: any) {
    // Handle duplicate email
    if (error.code === "P2002") {
      return {
        errors: {
          email: ["Email already exists"],
        },
      };
    }

    throw error;
  }
}

export async function login(state: FormState, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    };
  }

  await createSession(user.id);
  redirect("/");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
