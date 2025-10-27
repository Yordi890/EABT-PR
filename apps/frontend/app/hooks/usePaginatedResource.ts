import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import { getPaginatedResource } from "~/services/api.service";

// Interfaz de respuesta de la API
export interface ApiResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}

/**
 * Hook genérico para recursos paginados
 * @param resource Nombre del recurso (ej: "users")
 * @param pageIndex Página actual (base 1)
 */
export function usePaginatedResource<T>(resource: string, pageIndex: number) {
  const query = useInfiniteQuery<
    ApiResponse<T>,
    Error,
    InfiniteData<ApiResponse<T>>,
    [string, number],
    number
  >({
    queryKey: [resource, pageIndex],
    queryFn: ({ pageParam = 1 }) =>
      getPaginatedResource<T>(resource, pageParam),
    initialPageParam: 1,
    getNextPageParam: ({ meta: { page, totalPages } }: ApiResponse<T>) => {
      const nextPage = page + 1;
      return nextPage <= totalPages ? nextPage : undefined;
    },
  });

  // Solo los datos de la página actual
  const currentPageData =
    query.data?.pages.find((page) => page.meta.page === pageIndex)?.data || [];

  return {
    ...query,
    currentPageData,
  };
}
