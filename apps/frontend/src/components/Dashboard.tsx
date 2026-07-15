import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom"; // Importación añadida

// --- 1. CONFIGURACIÓN DE LA BASE DE DATOS ---
const schemaConfig: any = {
  User: {
    name: "Usuarios",
    pk: "id",
    searchFields: ["userName", "identityCard", "firstName"],
    columns: [
      { key: "id", label: "ID" },
      { key: "identityCard", label: "Cédula" },
      { key: "firstName", label: "Nombre" },
      { key: "lastName", label: "Apellidos" },
      { key: "userName", label: "Usuario" },
    ],
    formFields: [
      { name: "identityCard", label: "Cédula", type: "text", onlyNumbers: true },
      { name: "firstName", label: "Nombre", type: "text" },
      { name: "lastName", label: "Apellidos", type: "text" },
      { name: "userName", label: "Usuario", type: "text" },
      { name: "password", label: "Contraseña", type: "password" },
    ],
  },
  Producer: {
    name: "Productores",
    pk: "id",
    searchFields: ["dni", "code", "firstName", "lastName1"],
    columns: [
      { key: "id", label: "ID" },
      { key: "dni", label: "Carnet (DNI)" },
      { key: "code", label: "Código" },
      { key: "firstName", label: "Nombre" },
      { key: "lastName1", label: "Primer Apellido" },
      { key: "lastName2", label: "Segundo Apellido" },
      { key: "phone", label: "Teléfono" },
      { key: "cupCard", label: "Tarjeta CUP" },
    ],
    formFields: [
      { name: "dni", label: "Carnet (DNI)", type: "text", onlyNumbers: true },
      { name: "code", label: "Código", type: "text" },
      { name: "firstName", label: "Nombre", type: "text" },
      { name: "lastName1", label: "Primer Apellido", type: "text" },
      { name: "lastName2", label: "Segundo Apellido", type: "text" },
      { name: "phone", label: "Teléfono", type: "text", onlyNumbers: true },
      { name: "cupCard", label: "Tarjeta CUP", type: "text", onlyNumbers: true },
      { name: "mlcCard", label: "Tarjeta MLC", type: "text", onlyNumbers: true },
    ],
  },
  ProductionUnit: {
    name: "Unidades de Producción",
    pk: "id",
    searchFields: ["name", "address"],
    columns: [
      { key: "id", label: "ID" },
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
    pk: "id",
    searchFields: ["fileNumber", "producerdni"],
    columns: [
      { key: "id", label: "ID" },
      { key: "fileNumber", label: "No. Expediente" },
      { key: "area", label: "Área" },
      { key: "propertyType", label: "Tipo de Propiedad" },
      { key: "issueDate", label: "Fecha Emisión" },
      { key: "producerdni", label: "DNI Productor" },
    ],
    formFields: [
      { name: "fileNumber", label: "No. Expediente", type: "text" },
      { name: "area", label: "Área", type: "number" },
      { name: "propertyType", label: "Tipo de Propiedad", type: "text" },
      { name: "issueDate", label: "Fecha de Emisión", type: "text" },
      { name: "expirationDate", label: "Fecha de Expiración", type: "text" },
      { name: "producerdni", label: "DNI del Productor", type: "text" },
    ],
  },
  Supply: {
    name: "Suministros",
    pk: "id",
    searchFields: ["name"],
    columns: [
      { key: "id", label: "ID" },
      { key: "name", label: "Nombre" },
      { key: "quantity", label: "Cantidad" },
      { key: "unit", label: "Unidad" },
      { key: "price", label: "Precio" },
    ],
    formFields: [
      { name: "name", label: "Nombre", type: "text" },
      { name: "quantity", label: "Cantidad", type: "number" },
      { name: "unit", label: "Unidad", type: "text" },
      { name: "price", label: "Precio", type: "number" },
    ],
  },
  Contract: {
    name: "Contratos",
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

// --- DATOS SIMULADOS (Más completos) ---
const mockDB: any = {
  User: [
    { id: 1, identityCard: "12345678", firstName: "Admin", lastName: "Root", userName: "admin", password: "123456" },
    { id: 2, identityCard: "87654321", firstName: "Carlos", lastName: "Martinez", userName: "cmartinez", password: "password" },
    { id: 3, identityCard: "11223344", firstName: "Ana", lastName: "Gomez", userName: "agomez", password: "secure99" },
  ],
  Producer: [
    { id: 1, dni: "98765432", code: "P-001", firstName: "Juan", lastName1: "Perez", lastName2: "Gomez", phone: "5551234", cupCard: "90123456", mlcCard: "12345678" },
    { id: 2, dni: "12345678", code: "P-002", firstName: "Maria", lastName1: "Lopez", lastName2: "Suarez", phone: "5559876", cupCard: "90876543", mlcCard: "87654321" },
    { id: 3, dni: "45678912", code: "P-003", firstName: "Pedro", lastName1: "Ramirez", lastName2: "Torres", phone: "5554321", cupCard: "90567890", mlcCard: "56789012" },
    { id: 4, dni: "78912345", code: "P-004", firstName: "Sofia", lastName1: "Diaz", lastName2: "Ruiz", phone: "5556789", cupCard: "90543210", mlcCard: "43210987" },
  ],
  ProductionUnit: [
    { id: 1, name: "Unidad Norte", address: "Calle Principal #100" },
    { id: 2, name: "Unidad Sur", address: "Camino Viejo km 5" },
    { id: 3, name: "Unidad Central", address: "Av. Central #45" },
  ],
  LandFile: [
    { id: 1, fileNumber: "EXP-001", area: 10.5, propertyType: "Propia", issueDate: "2021-01-15", expirationDate: "2026-01-15", producerdni: "98765432" }
  ],
  Supply: [
    { id: 1, name: "Fertilizante A", quantity: 50, unit: "kg", price: 25.50 }
  ],
  Contract: [
    { id: 1, number: "CNT-2023-01", creationDate: "2023-05-01", plantingArea: 5.0, seedlingQuantity: 1000, plantingType: "Semia", tobaccoType: "Virginia", producerId: 1 }
  ]
};

// --- 2. COMPONENTE PRINCIPAL DASHBOARD ---
export default function Dashboard() {
  const navigate = useNavigate(); // Hook inicializado
  const [activeModel, setActiveModel] = useState<keyof typeof schemaConfig>("Producer");
  const [dbData, setDbData] = useState(mockDB);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  const filteredData = useMemo(() => {
    const currentData = dbData[activeModel] || [];
    if (searchTerm.length < 2) return currentData;

    const fieldsToSearch = schemaConfig[activeModel].searchFields;
    return currentData.filter((item: any) =>
      fieldsToSearch.some((field: string) =>
        String(item[field] || "").toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [dbData, activeModel, searchTerm]);

  const handleOpenCreate = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("¿Está seguro de que desea eliminar este registro?")) {
      setDbData((prev: any) => ({
        ...prev,
        [activeModel]: prev[activeModel].filter((item: any) => item.id !== id),
      }));
    }
  };

  const handleSave = (formData: any) => {
    if (editingItem) {
      setDbData((prev: any) => ({
        ...prev,
        [activeModel]: prev[activeModel].map((item: any) =>
          item.id === editingItem.id ? { ...item, ...formData } : item
        ),
      }));
    } else {
      const newId = Math.max(0, ...dbData[activeModel].map((d: any) => d.id)) + 1;
      setDbData((prev: any) => ({
        ...prev,
        [activeModel]: [...prev[activeModel], { id: newId, ...formData }],
      }));
    }
    setIsModalOpen(false);
  };

  const config = schemaConfig[activeModel];

  return (
    <div className="flex h-screen bg-slate-100">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-slate-700">
          <h2 className="text-xl font-bold tracking-tight">Empresa Corp</h2>
          <p className="text-xs text-slate-400 mt-1">Panel de Administración</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {Object.keys(schemaConfig).map((key) => (
            <button
              key={key}
              onClick={() => { setActiveModel(key as any); setSearchTerm(""); }}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-3 cursor-pointer ${
                activeModel === key ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
              {schemaConfig[key].name}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-700">
          {/* Botón con funcionalidad de cerrar sesión */}
          <button 
            onClick={() => navigate("/")} 
            className="w-full px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Centro de Gestión</h1>
            <p className="text-sm text-slate-500">Módulo: {config.name}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
                <p className="text-sm font-medium text-slate-900">Admin Root</p>
                <p className="text-xs text-slate-500">Rol: Administrador</p>
            </div>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">A</div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          
          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {["Total Registros", "Activos Hoy", "Reportes Pendientes", "Tasa de Éxito"].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-sm text-slate-500 font-medium">{stat}</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">
                  {i === 0 ? dbData[activeModel].length : Math.floor(Math.random() * 100)}
                </p>
                <div className="mt-4 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full w-1/2 rounded-full ${i % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabla */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
            
            <div className="p-6 border-b border-slate-200 flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-1/2">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={`Buscar en ${config.name}... (Mínimo 2 caracteres)`}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>
              <button
                onClick={handleOpenCreate}
                className="w-full md:w-auto flex items-center justify-center px-4 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                Agregar Nuevo
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    {config.columns.map((col: any) => (
                      <th key={col.key} className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {col.label}
                      </th>
                    ))}
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredData.length === 0 ? (
                    <tr>
                      <td colSpan={config.columns.length + 1} className="px-6 py-12 text-center text-slate-500 text-sm">
                        No se encontraron registros. {searchTerm.length === 1 && "(Escriba al menos 2 caracteres para buscar)"}
                      </td>
                    </tr>
                  ) : (
                    filteredData.map((item: any) => (
                      <tr 
                        key={item.id} 
                        className="hover:bg-blue-50/50 transition-colors cursor-pointer"
                        onClick={() => handleOpenEdit(item)}
                      >
                        {config.columns.map((col: any) => (
                          <td key={col.key} className="px-6 py-4 text-sm text-slate-900 font-medium">
                            {item[col.key] || <span className="text-slate-300">N/A</span>}
                          </td>
                        ))}
                        <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-2">
                            <button onClick={() => handleOpenEdit(item)} className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                            </button>
                            <button onClick={() => handleDelete(item.id)} className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer">
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
      </main>

      {isModalOpen && (
        <DynamicModal
          config={config}
          item={editingItem}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

// --- 3. MODAL DINÁMICO CON VALIDACIÓN ---
interface ModalProps {
  config: any;
  item: any;
  onClose: () => void;
  onSave: (data: any) => void;
}

function DynamicModal({ config, item, onClose, onSave }: ModalProps) {
  const [formData, setFormData] = useState<any>(
    item || Object.fromEntries(config.formFields.map((f: any) => [f.name, ""]))
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center sticky top-0 bg-white z-10">
          <h3 className="text-lg font-semibold text-slate-900">
            {item ? `Ver / Editar ${config.name.slice(0, -1)}` : `Crear Nuevo ${config.name.slice(0, -1)}`}
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {config.formFields.map((field: any) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium text-slate-700 mb-1.5">
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-blue-500 focus:ring-blue-100 transition-all"
                required
              />
              {field.onlyNumbers && (
                <p className="mt-1 text-xs text-slate-400">Solo se permiten números.</p>
              )}
            </div>
          ))}
          
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
              className="px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}