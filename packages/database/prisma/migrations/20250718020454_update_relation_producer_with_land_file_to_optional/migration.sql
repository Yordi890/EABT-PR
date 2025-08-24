-- DropForeignKey
ALTER TABLE "Producer" DROP CONSTRAINT "Producer_productionUnitName_fkey";

-- AlterTable
ALTER TABLE "Producer" ALTER COLUMN "productionUnitName" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Producer" ADD CONSTRAINT "Producer_productionUnitName_fkey" FOREIGN KEY ("productionUnitName") REFERENCES "ProductionUnit"("name") ON DELETE SET NULL ON UPDATE CASCADE;
