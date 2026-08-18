import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const API_BASE_URL = "http://localhost:3005/api/v1";

const COLORS = ['#10b981', '#3b82f6', '#f97316', '#ef4444', '#8b5cf6', '#0ea5e9'];

export default function ReportsPage() {
  const [activeReport, setActiveReport] = useState("r1");
  const [reportsData, setReportsData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Reportes - SGI Contratación";
    
    // Llamada real a la API para obtener los reportes
    const fetchReports = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/reports`);
        if (!res.ok) throw new Error("Error al cargar reportes");
        const data = await res.json();
        setReportsData(data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, []);

  // Si está cargando, mostramos un mensaje
  if (isLoading) {
    return (
      <div className="p-8 text-center text-slate-500 font-medium">
        Cargando datos estadísticos desde el servidor...
      </div>
    );
  }

  // Si no hay datos del reporte activo, mostramos un error
  if (!reportsData[activeReport]) {
    return (
      <div className="p-8 text-center text-red-500 font-medium">
        No se pudieron cargar los datos para este reporte. ¿Está el backend corriendo?
      </div>
    );
  }

  return (
    <div className="p-6 relative z-10">
      <div className="flex h-full gap-6">
        <aside className="w-72 flex-shrink-0">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Tipos de Reportes</h2>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            {Object.keys(reportsData).map((rKey) => (
              <button 
                key={rKey} 
                onClick={() => setActiveReport(rKey)} 
                className={`w-full flex items-center gap-3 p-4 text-left transition-all cursor-pointer border-l-4 ${activeReport === rKey ? 'bg-emerald-50 border-emerald-600 text-emerald-700' : 'border-transparent hover:bg-slate-50 text-slate-700'}`}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <span className="text-sm font-medium">{reportsData[rKey].title}</span>
              </button>
            ))}
          </div>
        </aside>

        <section className="flex-1 overflow-y-auto space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{reportsData[activeReport].title}</h2>
            <p className="text-sm text-slate-500">Datos estadísticos y gráficos.</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    {activeReport === "r1" && (<><th className="py-3 pr-4 text-xs font-bold text-slate-500 uppercase">Unidad</th><th className="py-3 pr-4 text-xs font-bold text-slate-500 uppercase">Tipo</th><th className="py-3 text-xs font-bold text-slate-500 uppercase text-right">Ha</th></>)}
                    {activeReport === "r2" && (<><th className="py-3 pr-4 text-xs font-bold text-slate-500 uppercase">Tipo</th><th className="py-3 text-xs font-bold text-slate-500 uppercase text-right">Total Ha</th></>)}
                    {activeReport === "r3" && (<><th className="py-3 pr-4 text-xs font-bold text-slate-500 uppercase">Unidad</th><th className="py-3 text-xs font-bold text-slate-500 uppercase text-right">Productores</th></>)}
                    {activeReport === "r4" && (<><th className="py-3 pr-4 text-xs font-bold text-slate-500 uppercase">Productor</th><th className="py-3 pr-4 text-xs font-bold text-slate-500 uppercase">Insumo</th><th className="py-3 text-xs font-bold text-slate-500 uppercase text-right">Cant.</th></>)}
                    {activeReport === "r5" && (<><th className="py-3 pr-4 text-xs font-bold text-slate-500 uppercase">Productor</th><th className="py-3 text-xs font-bold text-slate-500 uppercase">Unidad</th></>)}
                  </tr>
                </thead>
                <tbody>
                  {reportsData[activeReport].table.map((row: any, i: number) => (
                    <tr key={i} className="border-b border-slate-100 hover:bg-emerald-50 hover:text-emerald-900 transition-colors">
                      {activeReport === "r1" && (<><td className="py-3 pr-4 text-sm font-medium">{row.unidad}</td><td className="py-3 pr-4 text-sm">{row.tipo}</td><td className="py-3 text-sm font-bold text-right">{row.ha}</td></>)}
                      {activeReport === "r2" && (<><td className="py-3 pr-4 text-sm font-medium">{row.tipo}</td><td className="py-3 text-sm font-bold text-right">{row.total}</td></>)}
                      {activeReport === "r3" && (<><td className="py-3 pr-4 text-sm font-medium">{row.unidad}</td><td className="py-3 text-sm font-bold text-right">{row.productores}</td></>)}
                      {activeReport === "r4" && (<><td className="py-3 pr-4 text-sm font-medium">{row.productor}</td><td className="py-3 pr-4 text-sm">{row.insumo}</td><td className="py-3 text-sm font-bold text-right">{row.cantidad}</td></>)}
                      {activeReport === "r5" && (<><td className="py-3 pr-4 text-sm font-medium">{row.productor}</td><td className="py-3 text-sm">{row.unidad}</td></>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Visualización Gráfica</h3>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  {activeReport === "r1" ? (
                    <BarChart data={reportsData.r1.chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="name" fontSize={12} stroke="#64748b" />
                      <YAxis fontSize={12} stroke="#64748b" />
                      <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e2e8f0' }} />
                      <Legend />
                      <Bar dataKey="Vega Fina 1ra" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} />
                      <Bar dataKey="Tapado" stackId="a" fill="#3b82f6" />
                      <Bar dataKey="Burley" stackId="a" fill="#f97316" />
                      <Bar dataKey="Vega Fina 2da" stackId="a" fill="#ef4444" />
                      <Bar dataKey="Sol Palo" stackId="a" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  ) : activeReport === "r2" ? (
                    <PieChart>
                      <Pie data={reportsData.r2.chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                        {reportsData.r2.chartData.map((_: any, index: number) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e2e8f0' }} /><Legend />
                    </PieChart>
                  ) : activeReport === "r3" ? (
                    <BarChart layout="vertical" data={reportsData.r3.chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis type="number" fontSize={12} stroke="#64748b" />
                      <YAxis dataKey="name" type="category" fontSize={12} width={120} stroke="#64748b" />
                      <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e2e8f0' }} />
                      <Bar dataKey="productores" fill="#10b981" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  ) : activeReport === "r4" ? (
                    <BarChart data={reportsData.r4.chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="name" fontSize={12} stroke="#64748b" />
                      <YAxis fontSize={12} stroke="#64748b" />
                      <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e2e8f0' }} />
                      <Bar dataKey="value" fill="#3b82f6" name="Cantidad Total" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  ) : (
                    <PieChart>
                      <Pie data={reportsData.r5.chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                        {reportsData.r5.chartData.map((_: any, index: number) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e2e8f0' }} /><Legend />
                    </PieChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}