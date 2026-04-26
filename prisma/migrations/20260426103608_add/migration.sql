/*
  Warnings:

  - Added the required column `type` to the `degrees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "degrees" ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "birthYear" INTEGER;

-- CreateTable
CREATE TABLE "hobbies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "hobbies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HobbyToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_HobbyToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_HobbyToUser_B_index" ON "_HobbyToUser"("B");

-- AddForeignKey
ALTER TABLE "_HobbyToUser" ADD CONSTRAINT "_HobbyToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "hobbies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HobbyToUser" ADD CONSTRAINT "_HobbyToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
