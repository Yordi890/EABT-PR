import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const reportsData = {
  r1: {
    title: "Total de ha por unidad y tipo de tabaco",
    table: [
      { unidad: "Carlos Hidalgo", tipo: "Vega Fina 1ra", ha: 80 }, { unidad: "Carlos Hidalgo", tipo: "Tapado", ha: 50 }, { unidad: "Carlos Hidalgo", tipo: "Burley", ha: 80 },
      { unidad: "Frank Pais", tipo: "Vega Fina 1ra", ha: 100 }, { unidad: "Frank Pais", tipo: "Sol Palo", ha: 70 },
      { unidad: "Mártires del Corintia", tipo: "Vega Fina 1ra", ha: 292 }, { unidad: "Mártires del Corintia", tipo: "Tapado", ha: 160 }, { unidad: "Mártires del Corintia", tipo: "Vega Fina 2da", ha: 737 },
    ],
    chartData: [
      { name: "Carlos Hidalgo", "Vega Fina 1ra": 80, "Tapado": 50, "Burley": 80, "Vega Fina 2da": 0, "Sol Palo": 0 },
      { name: "Frank Pais", "Vega Fina 1ra": 100, "Tapado": 0, "Burley": 0, "Vega Fina 2da": 0, "Sol Palo": 70 },
      { name: "Mártires del Corintia", "Vega Fina 1ra": 292, "Tapado": 160, "Burley": 0, "Vega Fina 2da": 737, "Sol Palo": 0 },
    ]
  },
  r2: {
    title: "Total de ha contratadas por tipo de tabaco",
    table: [ { tipo: "Tapado", total: 210 }, { tipo: "Vega Fina 1ra", total: 472 }, { tipo: "Vega Fina 2da", total: 937 }, { tipo: "Sol Palo", total: 70 }, { tipo: "Burley", total: 80 } ],
    chartData: [ { name: "Tapado", value: 210 }, { name: "Vega Fina 1ra", value: 472 }, { name: "Vega Fina 2da", value: 937 }, { name: "Sol Palo", value: 70 }, { name: "Burley", value: 80 } ]
  },
  r3: {
    title: "Productores contratados por unidad",
    table: [ { unidad: "Carlos Hidalgo", productores: 4 }, { unidad: "Frank País", productores: 1 }, { unidad: "Mártires del Corintia", productores: 3 } ],
    chartData: [ { name: "Carlos Hidalgo", productores: 4 }, { name: "Frank País", productores: 1 }, { name: "Mártires del Corintia", productores: 3 } ]
  },
  r4: {
    title: "Insumos asignados a cada productor",
    table: [
      { productor: "Juan Pérez", insumo: "Fertilizante A", cantidad: 50 }, { productor: "Juan Pérez", insumo: "Hilo para Ensaltar", cantidad: 20 },
      { productor: "Maria Lopez", insumo: "Diesel", cantidad: 40 }, { productor: "Pedro Ramirez", insumo: "Fertilizante A", cantidad: 15 },
    ],
    chartData: [ { name: "Fertilizante A", value: 65 }, { name: "Hilo para Ensaltar", value: 20 }, { name: "Diesel", value: 40 } ]
  },
  r5: {
    title: "Listado de productores por unidad",
    table: [
      { productor: "Juan Pérez Guerra", unidad: "Carlos Hidalgo" }, { productor: "Ana Suárez", unidad: "Carlos Hidalgo" },
      { productor: "Pedro Ramirez", unidad: "Frank País" }, { productor: "Maria Lopez", unidad: "Mártires del Corintia" }, { productor: "Carlos Díaz", unidad: "Mártires del Corintia" },
    ],
    chartData: [ { name: "Carlos Hidalgo", value: 2 }, { name: "Frank País", value: 1 }, { name: "Mártires del Corintia", value: 2 } ]
  }
};

const COLORS = ['#10b981', '#3b82f6', '#f97316', '#ef4444', '#8b5cf6', '#0ea5e9'];

export default function ReportsPage() {
  const [activeReport, setActiveReport] = useState("r1");

  useEffect(() => {
    document.title = "Reportes - SGI Contratación";
  }, []);

  return (
    <div className="p-6 relative z-10">
      <div className="flex h-full gap-6">
        <aside className="w-72 flex-shrink-0">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Tipos de Reportes</h2>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            {Object.keys(reportsData).map((rKey) => (
              <button key={rKey} onClick={() => setActiveReport(rKey)} className={`w-full flex items-center gap-3 p-4 text-left transition-all cursor-pointer border-l-4 ${activeReport === rKey ? 'bg-emerald-50 border-emerald-600 text-emerald-700' : 'border-transparent hover:bg-slate-50 text-slate-700'}`}>
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <span className="text-sm font-medium">{reportsData[rKey as keyof typeof reportsData].title}</span>
              </button>
            ))}
          </div>
        </aside>

        <section className="flex-1 overflow-y-auto space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{reportsData[activeReport as keyof typeof reportsData].title}</h2>
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
                  {reportsData[activeReport as keyof typeof reportsData].table.map((row: any, i: number) => (
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