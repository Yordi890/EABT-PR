export const schemaConfig: any = {
    User: {
        name: "Gestionar Usuarios",
        singularName: "Usuario",
        pk: "id",
        searchFields: ["userName", "identityCard", "firstName", "lastName"],
        columns: [
            { key: "identityCard", label: "Carnet de identidad" },
            { key: "fullName", label: "Nombre y Apellidos" },
            { key: "userName", label: "Usuario" },
            { key: "password", label: "Contraseña" },
        ],
        formFields: [
            { name: "identityCard", label: "Carnet de Identidad", type: "text", onlyNumbers: true },
            { name: "firstName", label: "Nombres", type: "text" },
            { name: "lastName", label: "Apellidos", type: "text" },
            { name: "userName", label: "Usuario", type: "text" },
            { name: "password", label: "Contraseña", type: "password" },
        ],
        endpoint: "users"
    },
    Producer: {
        name: "Productores",
        singularName: "Productor",
        pk: "id",
        searchFields: ["dni", "code", "firstName", "lastName1"],
        columns: [
            { key: "code", label: "Código" }, { key: "dni", label: "Carnet de identidad" }, { key: "firstName", label: "Nombre" }, { key: "lastName1", label: "Primer Apellido" }, { key: "lastName2", label: "Segundo Apellido" }, { key: "phone", label: "Teléfono" }, { key: "productionUnitName", label: "Unidad Productiva" }, { key: "cupCard", label: "Tarjeta CUP" }, { key: "mlcCard", label: "Tarjeta MLC" },
        ],
        formFields: [
            { name: "dni", label: "Carnet de Identidad", type: "text", onlyNumbers: true }, { name: "code", label: "Código", type: "text" }, { name: "firstName", label: "Nombre", type: "text" }, { name: "lastName1", label: "Primer Apellido", type: "text" }, { name: "lastName2", label: "Segundo Apellido", type: "text" }, { name: "phone", label: "Teléfono", type: "text", onlyNumbers: true }, { name: "productionUnitName", label: "Unidad de Producción", type: "select", optionsSource: "ProductionUnit", optionValueKey: "name", optionLabelKey: "name" }, { name: "cupCard", label: "Tarjeta CUP", type: "text", onlyNumbers: true }, { name: "mlcCard", label: "Tarjeta MLC", type: "text", onlyNumbers: true },
        ],
        endpoint: "producers"
    },
    ProductionUnit: {
        name: "Unidades de Producción", singularName: "Unidad de Producción", pk: "id", searchFields: ["name", "address"],
        columns: [ { key: "name", label: "Nombre" }, { key: "address", label: "Dirección" } ],
        formFields: [ { name: "name", label: "Nombre", type: "text" }, { name: "address", label: "Dirección", type: "text" } ],
        endpoint: "production-units"
    },
    LandFile: {
        name: "Expedientes de Tierra", singularName: "Expediente de Tierra", pk: "id", searchFields: ["fileNumber", "producerCode"],
        columns: [ { key: "fileNumber", label: "No. Expediente" }, { key: "producerCode", label: "Productor" }, { key: "productionUnitName", label: "Unidad de Producción" }, { key: "area", label: "Área Total" }, { key: "propertyType", label: "Tipo de Propiedad" }, { key: "issueDate", label: "Fecha de Emisión" }, { key: "expirationDate", label: "Válido por" } ],
        formFields: [
            { name: "producerCode", label: "Productor", type: "select", optionsSource: "Producer", optionValueKey: "code", optionLabelKey: "code", associatedDisplay: { label: "Unidad de Producción", source: "Producer", matchKey: "code", showKey: "productionUnitName" } },
            { name: "fileNumber", label: "Nro Expediente", type: "text" }, { name: "area", label: "Área Total", type: "number", min: 1, validatePositive: true }, { name: "issueDate", label: "Fecha de Emisión", type: "date", max: "today" }, { name: "expirationDate", label: "Válido por", type: "date", min: "today" },
            { name: "propertyType", label: "Tipo de Propiedad", type: "staticSelect", options: [{ value: "Propietario", label: "Propietario" }, { value: "Usufructuario", label: "Usufructuario" }] },
        ],
        endpoint: "land-files"
    },
    Supply: {
        name: "Insumos", singularName: "Insumo", pk: "id", searchFields: ["name", "category"],
        columns: [ { key: "name", label: "Nombre" }, { key: "totalQuantity", label: "Cantidad Total" }, { key: "category", label: "Categoría" }, { key: "tapado", label: "Tapado" }, { key: "vegaFina2da", label: "Vega Fina 2da" }, { key: "burley", label: "Burley" }, { key: "vegaFina1ra", label: "Vega Fina 1ra" }, { key: "solPalo", label: "Sol Palo" } ],
        formFields: [
            { name: "name", label: "Nombre", type: "text" }, { name: "price", label: "Precio", type: "number", onlyNumbers: true },
            { name: "category", label: "Categoría", type: "staticSelect", options: [{ value: "Canasta basica", label: "Canasta basica" }, { value: "Otros gastos", label: "Otros gastos" }] },
            { name: "tapado", label: "Tapado", type: "number", onlyNumbers: true }, { name: "vegaFina2da", label: "Vega Fina 2da", type: "number", onlyNumbers: true }, { name: "burley", label: "Burley", type: "number", onlyNumbers: true }, { name: "vegaFina1ra", label: "Vega Fina 1ra", type: "number", onlyNumbers: true }, { name: "solPalo", label: "Sol Palo", type: "number", onlyNumbers: true }, { name: "totalQuantity", label: "Cantidad Total", type: "number", onlyNumbers: true },
        ],
        endpoint: "supplies"
    },
    Contract: {
        name: "Contratos", singularName: "Contrato", pk: "id", searchFields: ["number", "producerCode"],
        columns: [ { key: "number", label: "No. Contrato" }, { key: "producerCode", label: "Productor" }, { key: "productionUnitName", label: "Unidad de Producción" }, { key: "plantingArea", label: "Área de Plantación" }, { key: "tobaccoType", label: "Tipo de Tabaco" }, { key: "startDate", label: "Fecha de Inicio" } ],
        formFields: [
            { name: "producerCode", label: "Productor", type: "select", optionsSource: "Producer", optionValueKey: "code", optionLabelKey: "code", associatedDisplay: { label: "Unidad de Producción", source: "Producer", matchKey: "code", showKey: "productionUnitName" } },
            { name: "number", label: "No. Contrato", type: "text" }, { name: "plantingArea", label: "Área de Plantación", type: "number", min: 0.1 }, { name: "seedlingQuantity", label: "Cantidad de Posturas", type: "number", min: 1 },
            { name: "plantingType", label: "Tipo de Siembra", type: "staticSelect", options: [{ value: "Semia", label: "Semia" }, { value: "En cepa", label: "En cepa" }] },
            { name: "tobaccoType", label: "Tipo de Tabaco", type: "staticSelect", options: [{ value: "Virginia", label: "Virginia" }, { value: "Burley", label: "Burley" }, { value: "Sol Palo", label: "Sol Palo" }, { value: "Vega Fina 1ra", label: "Vega Fina 1ra" }, { value: "Vega Fina 2da", label: "Vega Fina 2da" }] },
            { name: "startDate", label: "Fecha de Inicio", type: "date", max: "today" }, { name: "endDate", label: "Fecha de Culminación", type: "date", min: "today" },
        ],
        endpoint: "contracts"
    },
};