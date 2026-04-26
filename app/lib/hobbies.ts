"use server";

import { prisma } from "@/app/lib/prisma";
import { Hobby } from "@/app/types/hobby";

export async function getHobbies(): Promise<Hobby[]> {
  try {
    const hobbies: Hobby[] = await prisma.hobby.findMany();
    return hobbies;
  } catch (error: any) {
    console.error("Error fetching hobbies:", error);
    throw new Error("Failed to fetch hobbies");
  }
}
