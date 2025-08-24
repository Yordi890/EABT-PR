/*
  Warnings:

  - A unique constraint covering the columns `[fileNumber]` on the table `LandFile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LandFile_fileNumber_key" ON "LandFile"("fileNumber");
