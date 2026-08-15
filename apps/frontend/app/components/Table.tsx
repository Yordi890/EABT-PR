import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  type ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { useEffect } from "react";
import { usePaginatedResource } from "~/hooks/usePaginatedResource";

interface TableProps<T> {
  resource: string;
  columns: ColumnDef<T>[];
  pageSize?: number;
  pageIndex: number;
  onPageChange: (page: number) => void;
  onTotalPagesChange?: (total: number) => void;
}

const Table = <T extends { id: number }>({
  resource,
  columns,
  pageIndex,
  pageSize = 1,
  onTotalPagesChange,
}: TableProps<T>) => {
  const { data, meta, isLoading, isError } = usePaginatedResource<T>(
    resource,
    pageIndex,
    pageSize,
  );

  const totalPages = meta?.totalPages ?? 0;

  useEffect(() => {
    if (onTotalPagesChange) {
      onTotalPagesChange(totalPages);
    }
  }, [totalPages, onTotalPagesChange]);

  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    pageCount: totalPages,
  });

  if (isLoading) return <div className="text-center py-10 text-slate-500 font-medium">Cargando datos...</div>;
  if (isError) return <div className="text-center py-10 text-red-500 font-medium">Error al cargar los datos.</div>;

  const hasRows = table.getRowModel().rows.length > 0;

  return (
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight capitalize">
          Listado de {resource}
        </h2>
        <p className="text-sm text-slate-500">Listado general y gestión de registros.</p>
      </div>
      
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">ID</th>
                {table.getHeaderGroups().map((headerGroup) => (
                  headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </th>
                  ))
                ))}
                {hasRows && (
                  <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Acciones</th>
                )}
              </tr>
            </thead>

            <tbody className="bg-white">
              {hasRows ? (
                table.getRowModel().rows.map((row) => (
                  <tr 
                    key={row.original.id} 
                    className="border-b border-slate-100 hover:bg-emerald-50 hover:text-emerald-900 border-l-4 border-transparent hover:border-emerald-600 transition-all cursor-pointer"
                  >
                    <td className="px-6 py-4 text-sm text-slate-500">{row.original.id}</td>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-6 py-4 text-sm text-slate-700 font-medium"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                    <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-100 rounded-lg transition-colors cursor-pointer">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3" /></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="text-center py-12 text-slate-500 border border-slate-200 italic"
                  >
                    No hay elementos para mostrar
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;