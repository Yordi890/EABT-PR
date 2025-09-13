/*
  Warnings:

  - You are about to drop the column `producerId` on the `LandFile` table. All the data in the column will be lost.
  - Added the required column `producerdni` to the `LandFile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LandFile" DROP CONSTRAINT "LandFile_producerId_fkey";

-- AlterTable
ALTER TABLE "LandFile" DROP COLUMN "producerId",
ADD COLUMN     "producerdni" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "LandFile" ADD CONSTRAINT "LandFile_producerdni_fkey" FOREIGN KEY ("producerdni") REFERENCES "Producer"("dni") ON DELETE RESTRICT ON UPDATE CASCADE;
