interface ApiResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}
export async function getPaginatedResource<T>(
  resource: string,
  page: number = 1,
): Promise<ApiResponse<T>> {
  const res = await fetch(
    `http://localhost:3005/api/v1/${resource}?page=${page}`,
  );
  if (!res.ok) throw new Error("Error al cargar los datos");
  return res.json();
}
