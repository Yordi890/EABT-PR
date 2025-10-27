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
  pageSize = 10,
  pageIndex,
  onTotalPagesChange,
}: TableProps<T>) => {
  const {
    data,
    currentPageData,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  } = usePaginatedResource<T>(resource, pageIndex);

  const totalPages = data?.pages[0]?.meta.totalPages || 1;

  useEffect(() => {
    if (onTotalPagesChange) onTotalPagesChange(totalPages);
  }, [totalPages, onTotalPagesChange]);

  const table = useReactTable({
    data: currentPageData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    pageCount: totalPages,
    state: {
      pagination: {
        pageIndex: pageIndex - 1,
        pageSize,
      },
    },
  });

  useEffect(() => {
    if (hasNextPage && pageIndex > 1) fetchNextPage();
  }, [pageIndex, fetchNextPage, hasNextPage]);

  if (isLoading) return <div className="text-center py-4">Cargando...</div>;
  if (isError)
    return (
      <div className="text-center py-4 text-red-500">
        Error al cargar los datos
      </div>
    );

  const hasRows = table.getRowModel().rows.length > 0;

  return (
    <div className="flex flex-col items-center my-8">
      {/* ↓ What defines the size of the table ↓ */}
      <div className="overflow-x-auto max-w-8xl">
        <table className="bg-white border border-gray-300 table-auto mx-auto shadow-md rounded-md">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                <th className="py-3 px-5 border border-gray-300 bg-gray-100 text-left text-base font-semibold text-gray-700 uppercase tracking-wide whitespace-nowrap">
                  ID
                </th>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-3 px-5 border border-gray-300 bg-gray-100 text-left text-base font-semibold text-gray-700 uppercase tracking-wide whitespace-nowrap"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
                {hasRows && (
                  <th className="py-3 px-5 border border-gray-300 bg-gray-100 text-left text-base font-semibold text-gray-700 uppercase tracking-wide whitespace-nowrap">
                    Actions
                  </th>
                )}
              </tr>
            ))}
          </thead>

          <tbody>
            {hasRows ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.original.id} className="hover:bg-gray-50">
                  <td className="py-2.5 px-5 border border-gray-300 text-sm whitespace-nowrap text-gray-700">
                    {row.original.id}
                  </td>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="py-2.5 px-5 border border-gray-300 text-sm whitespace-nowrap text-gray-700"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                  <td className="py-2.5 px-5 border border-gray-300 text-sm whitespace-nowrap">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-3 rounded mr-1 text-sm">
                      Ver
                    </button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-1 px-3 rounded mr-1 text-sm">
                      Editar
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded text-sm">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + 1} // <- Because the actions column is no longer counted
                  className="text-center py-6 text-gray-500 border border-gray-300 italic"
                >
                  No hay elementos para mostrar
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
