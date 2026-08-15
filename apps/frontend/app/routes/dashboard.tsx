import NavBar from "~/components/NavBar";
import { Outlet, useLocation } from "react-router";
import fondoDashboard from "~/assets/fondo-dashboard.jpg"; // Ajusta esta ruta a dónde tengas la imagen

export default function DashboardLayout() {
  const location = useLocation();
  // Si la ruta es exactamente /dashboard, mostramos la bienvenida
  const isHome = location.pathname === "/dashboard";

  return (
    <div className="h-screen bg-slate-50 flex flex-col overflow-hidden">
      {/* El NavBar está fijo arriba, NUNCA se recarga */}
      <NavBar />
      
      <main className="flex-1 overflow-y-auto relative">
        {isHome ? (
          // Pantalla de Inicio con la imagen de fondo a PANTALLA COMPLETA
          <div className="absolute inset-0 flex items-center justify-center p-8">
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
          // Si no es Inicio, mostramos la tabla que venga en la ruta (Outlet)
          <Outlet />
        )}
      </main>
    </div>
  );
}