import { useState } from "react";
import { useLocation, Navigate } from "react-router";
import Table from "~/components/Table";
import type { Route } from "./+types/dashboard.resource";
import columnMapping from "~/config/columnMapping";
import routeMapping from "~/config/routeMapping";
import { schemaConfig } from "~/config/schemaConfig";

import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/minimal.css";
import { useQueryState, parseAsInteger } from "nuqs";

const API_BASE_URL = "http://localhost:3005/api/v1";

export default function TableItem({ params }: Route.ComponentProps) {
  const location = useLocation();
  const userRole = localStorage.getItem("userRole");

  // Obtenemos el recurso de la URL
  const resourceUrl = params.resource;
  const resource: string = routeMapping[resourceUrl.toLowerCase()] || resourceUrl;
  const columns = columnMapping[resource] || [];

  // Mapeamos la URL directamente a la clave del schemaConfig de forma inteligente
   const modelKeyMap: { [key: string]: string } = {
    "users": "User",
    "producers": "Producer",
    "productionUnits": "ProductionUnit", // <--- Ya sabe a qué configuración ir
    "landFiles": "LandFile",
    "supplies": "Supply",
    "contracts": "Contract"
  };
  
  const modelKey = modelKeyMap[resourceUrl] || Object.keys(schemaConfig).find(key => key.toLowerCase() === resourceUrl.toLowerCase());
  const config = modelKey ? schemaConfig[modelKey] : null;

  // SEGURIDAD: Si el recurso es User y no es Admin, lo echamos al dashboard
  if (modelKey === "User" && userRole !== "Admin") {
    return <Navigate to="/dashboard" replace />;
  };

  // SEGURIDAD: Si el recurso es User y no es Admin, lo echamos al dashboard
  if (modelKey === "User" && userRole !== "Admin") {
    return <Navigate to="/dashboard" replace />;
  }

  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({ clearOnDefault: true }),
  );

  const [totalPages, setTotalPages] = useState(0);
  
  // Estados para los modales
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isViewMode, setIsViewMode] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<any>(null);

  const handleOpenCreate = () => { setEditingItem(null); setIsViewMode(false); setIsModalOpen(true); };
  const handleOpenView = (item: any) => { setEditingItem(item); setIsViewMode(true); setIsModalOpen(true); };
  const handleOpenEdit = (item: any) => { setEditingItem(item); setIsViewMode(false); setIsModalOpen(true); };
  const handleDeleteClick = (item: any) => { setItemToDelete(item); setIsDeleteModalOpen(true); };

  const confirmDelete = async () => {
    if (!itemToDelete || !config) return;
    try {
      await fetch(`${API_BASE_URL}/${config.endpoint}/${itemToDelete.id}`, { method: "DELETE" });
      // Aquí deberías invalidar la query de React Query para que la tabla se actualice sola
    } catch (error) {
      console.error("Error deleting:", error);
    }
    setIsDeleteModalOpen(false); setItemToDelete(null);
  };

    const handleSave = async (formData: any) => {
    if (!config) return;
    
    // --- AÑADE ESTA LÍNEA ---
    console.log("Datos que se intentan enviar a la API:", formData);
    // -------------------------

    if (modelKey === "User") formData.fullName = `${formData.firstName} ${formData.lastName}`;

    const method = editingItem ? "PUT" : "POST";
    const url = editingItem ? `${API_BASE_URL}/${config.endpoint}/${editingItem.id}` : `${API_BASE_URL}/${config.endpoint}`;

    try {
      await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
    } catch (error) {
      console.error("Error saving:", error); // Este error es normal que salte si no hay backend
    }
    setIsModalOpen(false);
  };

  const title = config ? config.name : resource;

  return (
    <div className="p-8 space-y-6 relative z-10">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight capitalize">Listado de {title}</h2>
        <p className="text-sm text-slate-500">Listado general y gestión de registros.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-50/50">
          <div className="relative w-full md:w-1/2">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input type="text" placeholder="Buscar... (Mínimo 2 caracteres)" className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" />
          </div>
          <button onClick={handleOpenCreate} className="w-full md:w-auto flex items-center justify-center px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg> Insertar
          </button>
        </div>

        {columns.length > 0 ? (
          <Table
            resource={resource}
            columns={columns}
            pageIndex={page}
            onPageChange={setPage}
            onTotalPagesChange={setTotalPages}
          />
        ) : (
          <div className="p-8 text-center text-slate-500">No hay columnas configuradas para {title}.</div>
        )}
      </div>

      {totalPages > 0 && (
        <div className="mt-4 flex justify-center">
          <ResponsivePagination current={page} total={totalPages} onPageChange={setPage} />
        </div>
      )}

      {/* MODAL DINÁMICO DE FORMULARIO */}
      {isModalOpen && config && (
        <DynamicModal config={config} item={editingItem} dbData={{}} isViewMode={isViewMode} onClose={() => setIsModalOpen(false)} onSave={handleSave} />
      )}

      {/* MODAL DE ELIMINAR */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
              <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">¿Eliminar registro?</h3>
            <p className="text-sm text-slate-500 mb-6">Esta acción no se podra revertir. ¿Está seguro de que desea eliminar este elemento?</p>
            <div className="flex justify-center gap-3">
              <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 cursor-pointer font-medium">Cancelar</button>
              <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer font-semibold shadow-sm">Sí, eliminar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- COMPONENTE DEL MODAL (Adaptado para no usar dbData por ahora) ---
interface ModalProps { config: any; item: any; dbData: any; isViewMode: boolean; onClose: () => void; onSave: (data: any) => void; }

function DynamicModal({ config, item, dbData, isViewMode, onClose, onSave }: ModalProps) {
  const [formData, setFormData] = useState<any>(item ? { ...item } : Object.fromEntries(config.formFields.map((f: any) => [f.name, ""])));
  const [errors, setErrors] = useState<any>({});
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (isViewMode) return;
    const { name, value } = e.target;
    const fieldConfig = config.formFields.find((f: any) => f.name === name);
    let finalValue = value;
    if (fieldConfig?.onlyNumbers) finalValue = value.replace(/[^0-9]/g, '');

    setFormData({ ...formData, [name]: finalValue });

    if (fieldConfig?.validatePositive && finalValue !== "") {
      if (Number(finalValue) < 1) {
        setErrors({ ...errors, [name]: "El valor no puede ser negativo o cero." });
      } else {
        const newErrors = { ...errors }; delete newErrors[name]; setErrors(newErrors);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isViewMode && Object.keys(errors).length === 0) onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center sticky top-0 bg-white z-10">
          <h3 className="text-lg font-semibold text-slate-900">{isViewMode ? `Detalles del ${config.singularName}` : (item ? `Editar ${config.singularName}` : `Insertar ${config.singularName}`)}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 cursor-pointer"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
            {config.formFields.map((field: any) => {
              let minDate = field.min === "today" ? today : undefined;
              let maxDate = field.max === "today" ? today : undefined;
              if (field.name === "endDate" && formData.startDate) minDate = formData.startDate;
              if (field.name === "expirationDate" && formData.issueDate) minDate = formData.issueDate;

              return (
                <div key={field.name} className={field.associatedDisplay ? "sm:col-span-2" : ""}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-slate-700 mb-1.5">{field.label}</label>
                  {field.type === "staticSelect" ? (
                    <select id={field.name} name={field.name} value={formData[field.name] || ""} onChange={handleChange} disabled={isViewMode} className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-emerald-500 focus:ring-emerald-100 transition-all disabled:bg-slate-100 disabled:text-slate-500 disabled:cursor-not-allowed" required>
                      <option value="" disabled>Seleccione una opción...</option>
                      {field.options.map((opt: any) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
                    </select>
                  ) : field.type === "select" ? (
                    <select id={field.name} name={field.name} value={formData[field.name] || ""} onChange={handleChange} disabled={isViewMode} className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-emerald-500 focus:ring-emerald-100 transition-all disabled:bg-slate-100 disabled:text-slate-500 disabled:cursor-not-allowed" required>
                      <option value="" disabled>Seleccione una opción...</option>
                      {/* Si tienes los datos de los selects, los mapeas aquí. Por ahora vacío. */}
                    </select>
                  ) : (
                    <input type={field.type} id={field.name} name={field.name} value={formData[field.name] || ""} onChange={handleChange} disabled={isViewMode} min={minDate || field.min} max={maxDate} className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-emerald-500 focus:ring-emerald-100 transition-all disabled:bg-slate-100 disabled:text-slate-500 disabled:cursor-not-allowed ${errors[field.name] ? 'border-red-500' : 'border-slate-200'}`} required />
                  )}
                  {field.onlyNumbers && !isViewMode && !errors[field.name] && (<p className="mt-1 text-xs text-slate-400">Solo se permiten números.</p>)}
                  {errors[field.name] && (<p className="mt-1 text-xs text-red-600 font-medium">{errors[field.name]}</p>)}
                </div>
              );
            })}
          </div>
          <div className="pt-4 flex justify-end gap-3 border-t border-slate-100 mt-6">
            {isViewMode ? (
              <button type="button" onClick={onClose} className="px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer shadow-sm">Cerrar</button>
            ) : (
              <>
                <button type="button" onClick={onClose} className="px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer">Cancelar</button>
                <button type="submit" disabled={Object.keys(errors).length > 0} className="px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">{item ? "Guardar Cambios" : "Agregar"}</button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}