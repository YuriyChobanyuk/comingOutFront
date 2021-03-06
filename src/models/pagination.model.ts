import { Direction } from "./types.model";
export interface PaginateResult<T> {
  docs: T[];
  total: number;
  limit: number;
  page?: number;
  pages?: number;
  offset?: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  [customLabel: string]: any;
}

export type PaginationSort = { [key: string]: Direction };
