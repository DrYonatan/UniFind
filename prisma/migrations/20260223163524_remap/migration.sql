/*
  Warnings:

  - You are about to drop the column `joinedAt` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "joinedAt",
ADD COLUMN     "joined_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
