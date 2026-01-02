-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "identityCard" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductionUnit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "ProductionUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producer" (
    "id" SERIAL NOT NULL,
    "dni" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName1" TEXT NOT NULL,
    "lastName2" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "productionUnitName" TEXT,
    "cupCard" TEXT NOT NULL,
    "mlcCard" TEXT NOT NULL,

    CONSTRAINT "Producer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandFile" (
    "id" SERIAL NOT NULL,
    "producerdni" TEXT NOT NULL,
    "fileNumber" TEXT NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "propertyType" TEXT NOT NULL,
    "issueDate" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,

    CONSTRAINT "LandFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supply" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Supply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "creationDate" TEXT NOT NULL,
    "producerId" INTEGER NOT NULL,
    "plantingArea" DOUBLE PRECISION NOT NULL,
    "seedlingQuantity" DOUBLE PRECISION NOT NULL,
    "plantingType" TEXT NOT NULL,
    "tobaccoType" TEXT NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupplyContract" (
    "id" SERIAL NOT NULL,
    "contractId" INTEGER NOT NULL,
    "supplyId" INTEGER NOT NULL,
    "quantdatety" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SupplyContract_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_identityCard_key" ON "User"("identityCard");

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "ProductionUnit_name_key" ON "ProductionUnit"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Producer_dni_key" ON "Producer"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Producer_code_key" ON "Producer"("code");

-- CreateIndex
CREATE UNIQUE INDEX "LandFile_fileNumber_key" ON "LandFile"("fileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Supply_name_key" ON "Supply"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Contract_number_key" ON "Contract"("number");

-- AddForeignKey
ALTER TABLE "Producer" ADD CONSTRAINT "Producer_productionUnitName_fkey" FOREIGN KEY ("productionUnitName") REFERENCES "ProductionUnit"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandFile" ADD CONSTRAINT "LandFile_producerdni_fkey" FOREIGN KEY ("producerdni") REFERENCES "Producer"("dni") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplyContract" ADD CONSTRAINT "SupplyContract_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplyContract" ADD CONSTRAINT "SupplyContract_supplyId_fkey" FOREIGN KEY ("supplyId") REFERENCES "Supply"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
