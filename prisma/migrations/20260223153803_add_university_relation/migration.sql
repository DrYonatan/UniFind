/*
  Warnings:

  - You are about to drop the column `attended_university` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `joined_at` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "attended_university",
DROP COLUMN "joined_at",
ADD COLUMN     "attended_university_id" TEXT,
ADD COLUMN     "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "universities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "universities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_attended_university_id_fkey" FOREIGN KEY ("attended_university_id") REFERENCES "universities"("id") ON DELETE SET NULL ON UPDATE CASCADE;
