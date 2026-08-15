import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const NavBar = () => {
    const items: { label: string, resource: string, adminOnly?: boolean }[] = [
    { label: "Usuarios", resource: "users", adminOnly: true },
    { label: "Productores", resource: "producers" },
    { label: "Expedientes", resource: "landFiles" },
    { label: "Insumos", resource: "supplies" },
    { label: "Contratos", resource: "contracts" },
    { label: "Unidades de Producción", resource: "productionUnits" }, // <--- AÑADE ESTA LÍNEA
    { label: "Reportes", resource: "reportes" }
  ];
  
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("userName") || "Usuario");
    setUserRole(localStorage.getItem("userRole") || "Operador");
  }, []);

  const handleClick = (resource: string) => {
    if (resource === "reportes") {
      navigate(`/dashboard/reportes`);
    } else {
      navigate(`/dashboard/${resource}?page=1`);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="bg-emerald-800 text-white shadow-md z-20 sticky top-0">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/dashboard")}>
          <svg className="w-8 h-8 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          <div>
            <h1 className="text-lg font-bold tracking-tight leading-none">SGI del Proceso Contratación</h1>
            <p className="text-xs text-emerald-200 leading-none mt-1">EABT Pinar del Río</p>
          </div>
        </div>

        <nav className="flex items-center gap-1">
          {/* BOTÓN DE INICIO FIJO */}
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 rounded-md text-sm font-medium text-emerald-100 hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            Inicio
          </button>

          {items.map((item, index) => (
            !(item.adminOnly && userRole !== "Admin") && (
              <button
                key={index}
                onClick={() => handleClick(item.resource)}
                className="px-4 py-2 rounded-md text-sm font-medium text-emerald-100 hover:bg-emerald-700 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            )
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
  );
};

export default NavBar;