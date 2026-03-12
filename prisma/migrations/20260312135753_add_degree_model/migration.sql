/*
  Warnings:

  - A unique constraint covering the columns `[externalId]` on the table `universities` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "universities" ADD COLUMN     "country" TEXT,
ADD COLUMN     "externalId" TEXT;

-- CreateTable
CREATE TABLE "degrees" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "university_id" TEXT NOT NULL,

    CONSTRAINT "degrees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "universities_externalId_key" ON "universities"("externalId");

-- AddForeignKey
ALTER TABLE "degrees" ADD CONSTRAINT "degrees_university_id_fkey" FOREIGN KEY ("university_id") REFERENCES "universities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
