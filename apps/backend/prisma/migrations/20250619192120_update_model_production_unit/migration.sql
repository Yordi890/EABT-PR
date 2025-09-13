/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `ProductionUnit` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProductionUnit_name_key" ON "ProductionUnit"("name");
