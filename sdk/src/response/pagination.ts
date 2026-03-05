import type { BaseResponse } from './response';

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  perPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextPage: number | null;
  previousPage: number | null;
}

export type PaginatedResponse<T, K extends string> = {
  [key in K]: T[];
} & PaginatedMeta &
  BaseResponse;

export function paginate<T, K extends string = 'data'>(
  items: T[],
  page: number,
  limit: number,
  totalItems: number,
  key: K = 'data' as K,
): PaginatedResponse<T, K> {
  const totalPages = Math.ceil(totalItems / limit);
  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;

  return {
    [key]: items,
    currentPage: page,
    totalPages,
    totalItems,
    perPage: limit,
    hasNextPage,
    hasPreviousPage,
    nextPage: hasNextPage ? page + 1 : null,
    previousPage: hasPreviousPage ? page - 1 : null,
    success: true,
    message: 'Dados carregados com sucesso.',
  } as PaginatedResponse<T, K>;
}

export const defaultPaginationValues: PaginatedMeta = {
  currentPage: 0,
  totalPages: 0,
  totalItems: 0,
  perPage: 0,
  hasNextPage: false,
  hasPreviousPage: false,
  nextPage: null,
  previousPage: null,
};
