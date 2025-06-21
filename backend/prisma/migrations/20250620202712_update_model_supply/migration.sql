/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Supply` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Supply_name_key" ON "Supply"("name");
