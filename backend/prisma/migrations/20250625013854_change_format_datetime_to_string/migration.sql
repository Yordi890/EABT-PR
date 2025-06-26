/*
  Warnings:

  - You are about to drop the column `quantity` on the `SupplyContract` table. All the data in the column will be lost.
  - Added the required column `quantdatety` to the `SupplyContract` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contract" ALTER COLUMN "creationDate" DROP DEFAULT,
ALTER COLUMN "creationDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "LandFile" ALTER COLUMN "issueDate" SET DATA TYPE TEXT,
ALTER COLUMN "expirationDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "SupplyContract" DROP COLUMN "quantity",
ADD COLUMN     "quantdatety" DOUBLE PRECISION NOT NULL;
