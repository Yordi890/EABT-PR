import { useQuery } from "@tanstack/react-query";
import { getPaginatedResource, type ApiResponse } from "~/services/api.service";

interface UsePaginatedResourceResult<T> {
  data: T[];
  meta?: ApiResponse<T>["meta"];
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
}

export function usePaginatedResource<T>(
  resource: string,
  page: number,
  pageSize: number = 10,
): UsePaginatedResourceResult<T> {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: [resource, page, pageSize],
    queryFn: () => getPaginatedResource<T>(resource, page, pageSize),
    placeholderData: (previous) => previous,
  });

  return {
    data: data?.data ?? [], // ← solo los items
    meta: data?.meta, // ← info de la paginación
    isLoading,
    isFetching,
    isError,
  };
}
