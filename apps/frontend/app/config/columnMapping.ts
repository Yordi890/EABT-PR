import type { ColumnDef } from "@tanstack/react-table";

// Define interfaces de ejemplo
interface User {
  id: number;
  identityCard: string;
  firstName: string;
  lastName: string;
  userName: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

// Mapeo de columnas por recurso
const columnMapping: Record<string, ColumnDef<any>[]> = {
  users: [
    { accessorKey: "identityCard", header: "Cédula" },
    { accessorKey: "firstName", header: "Nombre" },
    { accessorKey: "lastName", header: "Apellido" },
    { accessorKey: "userName", header: "Usuario" },
  ],
  productionUnits: [
    { accessorKey: "name", header: "Nombre" },
    { accessorKey: "address", header: "Dirección" },
  ],
  producers: [
    { accessorKey: "dni", header: "DNI" },
    { accessorKey: "code", header: "Código" },
    { accessorKey: "firstName", header: "Nombre" },
    { accessorKey: "lastName1", header: "Apellido 1" },
    { accessorKey: "lastName2", header: "Apellido 2" },
    { accessorKey: "phone", header: "Teléfono" },
    { accessorKey: "productionUnitName", header: "Unidad de Producción" },
    { accessorKey: "cupCard", header: "Tarjeta CUP" },
    { accessorKey: "mlcCard", header: "Tarjeta MLC" },
  ],
  landFiles: [
    { accessorKey: "producerdni", header: "DNI Productor" },
    { accessorKey: "fileNumber", header: "Número de Ficha" },
    { accessorKey: "area", header: "Área" },
    { accessorKey: "propertyType", header: "Tipo de Propiedad" },
    { accessorKey: "issueDate", header: "Fecha de Emisión" },
    { accessorKey: "expirationDate", header: "Fecha de Vencimiento" },
  ],
  supplies: [
    { accessorKey: "name", header: "Nombre" },
    { accessorKey: "quantity", header: "Cantidad" },
    { accessorKey: "unit", header: "Unidad" },
    { accessorKey: "price", header: "Precio" },
  ],
  contracts: [
    { accessorKey: "number", header: "Número de Contrato" },
    { accessorKey: "creationDate", header: "Fecha de Creación" },
    { accessorKey: "producerId", header: "ID del Productor" },
    { accessorKey: "plantingArea", header: "Área de Plantación" },
    { accessorKey: "seedlingQuantity", header: "Cantidad de Plantines" },
    { accessorKey: "plantingType", header: "Tipo de Plantación" },
    { accessorKey: "tobaccoType", header: "Tipo de Tabaco" },
  ],
  supplyContracts: [
    { accessorKey: "contractId", header: "ID de Contrato" },
    { accessorKey: "supplyId", header: "ID de Insumo" },
    { accessorKey: "quantdatety", header: "Cantidad" },
  ],
};

export default columnMapping;
