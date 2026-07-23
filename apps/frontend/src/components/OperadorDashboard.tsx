import { useState, useMemo } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import fondoDashboard from "../assets/fondo-dashboard.jpg"; // Ajusta la ruta si es necesario

// --- 1. CONFIGURACIÓN DE LA BASE DE DATOS ---
const schemaConfig: any = {
    Inicio: { name: "Inicio", singularName: "Inicio" },
    Producer: {
        name: "Productores",
        singularName: "Productor",
        pk: "id",
        searchFields: ["dni", "code", "firstName", "lastName1"],
        columns: [
            { key: "code", label: "Código" },
            { key: "dni", label: "Carnet de identidad" },
            { key: "firstName", label: "Nombre" },
            { key: "lastName1", label: "Primer Apellido" },
            { key: "lastName2", label: "Segundo Apellido" },
            { key: "phone", label: "Teléfono" },
            { key: "productionUnitName", label: "Unidad Productiva" },
            { key: "cupCard", label: "Tarjeta CUP" },
            { key: "mlcCard", label: "Tarjeta MLC" },
        ],
        formFields: [
            { name: "dni", label: "Carnet de Identidad", type: "text", onlyNumbers: true },
            { name: "code", label: "Código", type: "text" },
            { name: "firstName", label: "Nombre", type: "text" },
            { name: "lastName1", label: "Primer Apellido", type: "text" },
            { name: "lastName2", label: "Segundo Apellido", type: "text" },
            { name: "phone", label: "Teléfono", type: "text", onlyNumbers: true },
            { 
                name: "productionUnitName", 
                label: "Unidad de Producción", 
                type: "select", 
                optionsSource: "ProductionUnit",
                optionValueKey: "name",
                optionLabelKey: "name"
            },
            { name: "cupCard", label: "Tarjeta CUP", type: "text", onlyNumbers: true },
            { name: "mlcCard", label: "Tarjeta MLC", type: "text", onlyNumbers: true },
        ],
    },
    ProductionUnit: {
        name: "Unidades de Producción",
        singularName: "Unidad de Producción",
        pk: "id",
        searchFields: ["name", "address"],
        columns: [
            { key: "name", label: "Nombre" },
            { key: "address", label: "Dirección" },
        ],
        formFields: [
            { name: "name", label: "Nombre", type: "text" },
            { name: "address", label: "Dirección", type: "text" },
        ],
    },
    LandFile: {
        name: "Expedientes de Tierra",
        singularName: "Expediente de Tierra",
        pk: "id",
        searchFields: ["fileNumber", "producerCode"],
        columns: [
            { key: "fileNumber", label: "No. Expediente" },
            { key: "producerCode", label: "Productor" },
            { key: "productionUnitName", label: "Unidad de Producción" },
            { key: "area", label: "Área Total" },
            { key: "propertyType", label: "Tipo de Propiedad" },
            { key: "issueDate", label: "Fecha de Emisión" },
            { key: "expirationDate", label: "Válido por" },
        ],
        formFields: [
            { 
                name: "producerCode", 
                label: "Productor", 
                type: "select", 
                optionsSource: "Producer",
                optionValueKey: "code",
                optionLabelKey: "code",
                associatedDisplay: { 
                    label: "Unidad de Producción", 
                    source: "Producer", 
                    matchKey: "code", 
                    showKey: "productionUnitName" 
                }
            },
            { name: "fileNumber", label: "Nro Expediente", type: "text" },
            { name: "area", label: "Área Total", type: "number", min: 1 },
            { name: "issueDate", label: "Fecha de Emisión", type: "text" },
            { name: "expirationDate", label: "Válido por", type: "text" },
            { 
                name: "propertyType", 
                label: "Tipo de Propiedad", 
                type: "staticSelect", 
                options: [
                    { value: "Propietario", label: "Propietario" },
                    { value: "Usufructuario", label: "Usufructuario" }
                ]
            },
        ],
    },
    Supply: {
        name: "Insumos",
        singularName: "Insumo",
        pk: "id",
        searchFields: ["name", "category"],
        columns: [
            { key: "name", label: "Nombre" },
            { key: "totalQuantity", label: "Cantidad Total" },
            { key: "category", label: "Categoría" },
            { key: "tapado", label: "Tapado" },
            { key: "vegaFina2da", label: "Vega Fina 2da" },
            { key: "burley", label: "Burley" },
            { key: "vegaFina1ra", label: "Vega Fina 1ra" },
            { key: "solPalo", label: "Sol Palo" },
        ],
        formFields: [
            { name: "name", label: "Nombre", type: "text" },
            { name: "price", label: "Precio", type: "number", onlyNumbers: true },
            { 
                name: "category", 
                label: "Categoría", 
                type: "staticSelect", 
                options: [
                    { value: "Canasta basica", label: "Canasta basica" },
                    { value: "Otros gastos", label: "Otros gastos" }
                ]
            },
            { name: "tapado", label: "Tapado", type: "number", onlyNumbers: true },
            { name: "vegaFina2da", label: "Vega Fina 2da", type: "number", onlyNumbers: true },
            { name: "burley", label: "Burley", type: "number", onlyNumbers: true },
            { name: "vegaFina1ra", label: "Vega Fina 1ra", type: "number", onlyNumbers: true },
            { name: "solPalo", label: "Sol Palo", type: "number", onlyNumbers: true },
            { name: "totalQuantity", label: "Cantidad Total", type: "number", onlyNumbers: true },
        ],
    },
    Contract: {
        name: "Contratos",
        singularName: "Contrato",
        pk: "id",
        searchFields: ["number", "producerId"],
        columns: [
            { key: "id", label: "ID" },
            { key: "number", label: "No. Contrato" },
            { key: "creationDate", label: "Fecha Creación" },
            { key: "plantingArea", label: "Área Siembra" },
            { key: "tobaccoType", label: "Tipo Tabaco" },
            { key: "producerId", label: "ID Productor" },
        ],
        formFields: [
            { name: "number", label: "No. Contrato", type: "text" },
            { name: "creationDate", label: "Fecha de Creación", type: "text" },
            { name: "plantingArea", label: "Área de Siembra", type: "number" },
            { name: "seedlingQuantity", label: "Cantidad de Posturas", type: "number" },
            { name: "plantingType", label: "Tipo de Siembra", type: "text" },
            { name: "tobaccoType", label: "Tipo de Tabaco", type: "text" },
            { name: "producerId", label: "ID del Productor", type: "number" },
        ],
    },
};

// --- DATOS SIMULADOS (Actualizados) ---
const mockDB: any = {
    Producer: [
        { id: 1, dni: "98765432", code: "P-001", firstName: "Juan", lastName1: "Perez", lastName2: "Gomez", phone: "5551234", productionUnitName: "Mártires del Corintia", cupCard: "90123456", mlcCard: "12345678" },
        { id: 2, dni: "12345678", code: "P-002", firstName: "Maria", lastName1: "Lopez", lastName2: "Suarez", phone: "5559876", productionUnitName: "Carlos Hidalgo", cupCard: "90876543", mlcCard: "87654321" },
    ],
    ProductionUnit: [
        { id: 1, name: "Mártires del Corintia", address: "Km 8/2 carretera San Juan" },
        { id: 2, name: "Carlos Hidalgo", address: "Km 1/2 carretera San Juan" },
        { id: 3, name: "Frank Pais", address: "Km 5/2 carretera San Juan" },
    ],
    LandFile: [{ id: 1, fileNumber: "EXP-001", producerCode: "P-001", productionUnitName: "Mártires del Corintia", area: 10.5, propertyType: "Propietario", issueDate: "2021-01-15", expirationDate: "2026-01-15" }],
    Supply: [
        { id: 1, name: "Fertilizante A", totalQuantity: 50, category: "Canasta basica", tapado: 10, vegaFina2da: 10, burley: 10, vegaFina1ra: 10, solPalo: 10, price: 25.50 }
    ],
    Contract: [{ id: 1, number: "CNT-2023-01", creationDate: "2023-05-01", plantingArea: 5.0, seedlingQuantity: 1000, plantingType: "Semia", tobaccoType: "Virginia", producerId: 1 }]
};

// --- 2. COMPONENTE PRINCIPAL OPERADOR ---
export default function OperadorDashboard() {
    const navigate = useNavigate();
    const [activeModel, setActiveModel] = useState<string>("Inicio");
    const [dbData, setDbData] = useState(mockDB);

    const userRole = localStorage.getItem("userRole");
    const userName = localStorage.getItem("userName") || "Operador";

    if (userRole !== "Operador") {
        return <Navigate to="/" replace />;
    }

    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<any>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<any>(null);

    const filteredData = useMemo(() => {
        if (activeModel === "Inicio" || !dbData[activeModel]) return [];
        if (searchTerm.length < 2) return dbData[activeModel] || [];

        const fieldsToSearch = schemaConfig[activeModel].searchFields;
        return dbData[activeModel].filter((item: any) =>
            fieldsToSearch.some((field: string) =>
                String(item[field] || "").toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [dbData, activeModel, searchTerm]);

    const handleOpenCreate = () => { setEditingItem(null); setIsModalOpen(true); };
    const handleOpenEdit = (item: any) => { setEditingItem(item); setIsModalOpen(true); };

    const handleDeleteClick = (item: any) => {
        setItemToDelete(item);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        if (itemToDelete) {
            setDbData((prev: any) => ({ ...prev, [activeModel]: prev[activeModel].filter((i: any) => i.id !== itemToDelete.id) }));
        }
        setIsDeleteModalOpen(false);
        setItemToDelete(null);
    };

    const handleSave = (formData: any) => {
        if (activeModel === "LandFile" && formData.producerCode) {
            const producer = dbData.Producer.find((p: any) => p.code === formData.producerCode);
            if (producer) {
                formData.productionUnitName = producer.productionUnitName;
            }
        }

        if (editingItem) {
            setDbData((prev: any) => ({ ...prev, [activeModel]: prev[activeModel].map((item: any) => item.id === editingItem.id ? { ...item, ...formData } : item) }));
        } else {
            const newId = Math.max(0, ...(dbData[activeModel]?.map((d: any) => d.id) || [0])) + 1;
            setDbData((prev: any) => ({ ...prev, [activeModel]: [...(prev[activeModel] || []), { id: newId, ...formData }] }));
        }
        setIsModalOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem("userRole");
        localStorage.removeItem("userName");
        navigate("/");
    };

    const config = schemaConfig[activeModel];
    const menuItems = Object.keys(schemaConfig);

    return (
        <div className="flex flex-col h-screen bg-slate-50">

            <header className="bg-emerald-800 text-white shadow-md z-20">
                <div className="flex items-center justify-between h-16 px-6">
                    <div className="flex items-center gap-3 cursor-pointer">
                        <svg className="w-8 h-8 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        <div>
                            <h1 className="text-lg font-bold tracking-tight leading-none">SGI del Proceso Contratación</h1>
                            <p className="text-xs text-emerald-200 leading-none mt-1">EABT Pinar del Río</p>
                        </div>
                    </div>

                    <nav className="flex items-center gap-1 flex-1 justify-center">
                        {menuItems.map((key) => (
                            <button
                                key={key}
                                onClick={() => { setActiveModel(key); setSearchTerm(""); }}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${activeModel === key ? "bg-emerald-600 text-white shadow-sm" : "text-emerald-100 hover:bg-emerald-700"}`}
                            >
                                {schemaConfig[key].name}
                            </button>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <p className="text-sm font-medium leading-none">{userName}</p>
                            <p className="text-xs text-emerald-200 mt-1">Rol: {userRole}</p>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 bg-emerald-900/50 hover:bg-emerald-900 px-3 py-2 rounded-md text-sm cursor-pointer transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                            Salir
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto">
                {activeModel === "Inicio" ? (
                    <div className="relative h-full flex items-center justify-center p-8">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${fondoDashboard})` }}></div>
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="relative text-center text-white max-w-2xl z-10">
                            <h2 className="text-5xl font-bold mb-4 tracking-tight drop-shadow-lg">Bienvenido al Sistema</h2>
                            <p className="text-xl text-emerald-100 drop-shadow-md mb-8">
                                Gestione de manera eficiente las unidades de producción, contratos y productores agrícolas.
                            </p>
                            <div className="inline-block bg-emerald-600/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-xl border border-emerald-400/30">
                                <p className="text-sm font-medium">Seleccione un módulo en la barra superior para comenzar a trabajar.</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="p-8 space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                                Listado de {config.name.toLowerCase()}
                            </h2>
                            <p className="text-sm text-slate-500">Listado general y gestión de registros.</p>
                        </div>

                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="p-4 border-b border-slate-200 flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-50/50">
                                <div className="relative w-full md:w-1/2">
                                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Buscar... (Mínimo 2 caracteres)"
                                        className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                    />
                                </div>
                                <button
                                    onClick={handleOpenCreate}
                                    className="w-full md:w-auto flex items-center justify-center px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap shadow-sm"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                    Insertar
                                </button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-emerald-50 border-b border-emerald-100">
                                            {config.columns.map((col: any) => (
                                                <th key={col.key} className="px-6 py-3 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                                                    {col.label}
                                                </th>
                                            ))}
                                            <th className="px-6 py-3 text-xs font-bold text-emerald-800 uppercase tracking-wider text-right">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 bg-white">
                                        {filteredData.length === 0 ? (
                                            <tr>
                                                <td colSpan={config.columns.length + 1} className="px-6 py-12 text-center text-slate-500 text-sm">
                                                    No se encontraron registros.
                                                </td>
                                            </tr>
                                        ) : (
                                            filteredData.map((item: any) => (
                                                <tr
                                                    key={item.id}
                                                    className="hover:bg-emerald-50/40 transition-colors cursor-pointer"
                                                    onClick={() => handleOpenEdit(item)}
                                                >
                                                    {config.columns.map((col: any) => (
                                                        <td key={col.key} className="px-6 py-3.5 text-sm text-slate-700 font-medium">
                                                            {item[col.key] || <span className="text-slate-300">N/A</span>}
                                                        </td>
                                                    ))}
                                                    <td className="px-6 py-3.5 text-right" onClick={(e) => e.stopPropagation()}>
                                                        <div className="flex items-center justify-end gap-2">
                                                            <button onClick={() => handleOpenEdit(item)} className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer">
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                                            </button>
                                                            <button onClick={() => handleDeleteClick(item)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer">
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3"></path></svg>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {isModalOpen && activeModel !== "Inicio" && (
                <DynamicModal
                    config={config}
                    item={editingItem}
                    dbData={dbData}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSave}
                />
            )}

            {isDeleteModalOpen && (
                <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 text-center">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                            <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">¿Eliminar registro?</h3>
                        <p className="text-sm text-slate-500 mb-6">
                            Esta acción no se podra revertir. ¿Está seguro de que desea eliminar este elemento?
                        </p>
                        <div className="flex justify-center gap-3">
                            <button
                                onClick={() => setIsDeleteModalOpen(false)}
                                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 cursor-pointer font-medium"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer font-semibold shadow-sm"
                            >
                                Sí, eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// --- 3. MODAL DINÁMICO DE FORMULARIO ---
interface ModalProps {
    config: any;
    item: any;
    dbData: any;
    onClose: () => void;
    onSave: (data: any) => void;
}

function DynamicModal({ config, item, dbData, onClose, onSave }: ModalProps) {
    const [formData, setFormData] = useState<any>(
        item ? { ...item } : Object.fromEntries(config.formFields.map((f: any) => [f.name, ""]))
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const fieldConfig = config.formFields.find((f: any) => f.name === name);

        if (fieldConfig?.onlyNumbers) {
            const numericValue = value.replace(/[^0-9]/g, '');
            setFormData({ ...formData, [name]: numericValue });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center sticky top-0 bg-white z-10">
                    <h3 className="text-lg font-semibold text-slate-900">
                        {item ? `Editar ${config.singularName}` : `Insertar ${config.singularName}`}
                    </h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 cursor-pointer">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    {/* GRID DE 2 COLUMNAS PARA LOS CAMPOS DEL FORMULARIO */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                        {config.formFields.map((field: any) => {
                            const associatedValue = field.associatedDisplay 
                                ? dbData[field.associatedDisplay.source]?.find((opt: any) => opt[field.associatedDisplay.matchKey] === formData[field.name])?.[field.associatedDisplay.showKey]
                                : null;

                            return (
                                <div key={field.name} className={field.associatedDisplay ? "sm:col-span-2" : ""}>
                                    <label htmlFor={field.name} className="block text-sm font-medium text-slate-700 mb-1.5">
                                        {field.label}
                                    </label>
                                    
                                    {field.type === "staticSelect" ? (
                                        <select
                                            id={field.name}
                                            name={field.name}
                                            value={formData[field.name] || ""}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-emerald-500 focus:ring-emerald-100 transition-all"
                                            required
                                        >
                                            <option value="" disabled>Seleccione una opción...</option>
                                            {field.options.map((opt: any) => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                    ) : field.type === "select" ? (
                                        <select
                                            id={field.name}
                                            name={field.name}
                                            value={formData[field.name] || ""}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-emerald-500 focus:ring-emerald-100 transition-all"
                                            required
                                        >
                                            <option value="" disabled>Seleccione una opción...</option>
                                            {dbData[field.optionsSource]?.map((opt: any) => (
                                                <option key={opt.id} value={opt[field.optionValueKey]}>
                                                    {opt[field.optionLabelKey]}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type={field.type}
                                            id={field.name}
                                            name={field.name}
                                            value={formData[field.name] || ""}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-emerald-500 focus:ring-emerald-100 transition-all"
                                            required
                                        />
                                    )}

                                    {field.associatedDisplay && (
                                        <div className="mt-2">
                                            <label className="block text-sm font-medium text-slate-500 mb-1">
                                                {field.associatedDisplay.label}
                                            </label>
                                            <div className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-200 rounded-lg text-slate-600 text-sm">
                                                {associatedValue || "Seleccione un productor primero..."}
                                            </div>
                                        </div>
                                    )}

                                    {field.onlyNumbers && (
                                        <p className="mt-1 text-xs text-slate-400">Solo se permiten números.</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="pt-4 flex justify-end gap-3 border-t border-slate-100 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer shadow-sm"
                        >
                            {item ? "Guardar Cambios" : "Agregar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}