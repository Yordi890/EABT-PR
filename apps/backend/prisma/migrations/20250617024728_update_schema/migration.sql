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
    "productionUnitId" INTEGER NOT NULL,
    "cupCard" DOUBLE PRECISION NOT NULL,
    "mlcCard" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Producer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandFile" (
    "id" SERIAL NOT NULL,
    "producerId" INTEGER NOT NULL,
    "fileNumber" TEXT NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "propertyType" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,

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
    "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
    "quantity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SupplyContract_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Producer_dni_key" ON "Producer"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Producer_code_key" ON "Producer"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Contract_number_key" ON "Contract"("number");

-- AddForeignKey
ALTER TABLE "Producer" ADD CONSTRAINT "Producer_productionUnitId_fkey" FOREIGN KEY ("productionUnitId") REFERENCES "ProductionUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandFile" ADD CONSTRAINT "LandFile_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplyContract" ADD CONSTRAINT "SupplyContract_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplyContract" ADD CONSTRAINT "SupplyContract_supplyId_fkey" FOREIGN KEY ("supplyId") REFERENCES "Supply"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
