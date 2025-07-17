/*
  Warnings:

  - You are about to drop the column `productionUnitId` on the `Producer` table. All the data in the column will be lost.
  - Added the required column `productionUnitName` to the `Producer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Producer" DROP CONSTRAINT "Producer_productionUnitId_fkey";

-- AlterTable
ALTER TABLE "Producer" DROP COLUMN "productionUnitId",
ADD COLUMN     "productionUnitName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Producer" ADD CONSTRAINT "Producer_productionUnitName_fkey" FOREIGN KEY ("productionUnitName") REFERENCES "ProductionUnit"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
