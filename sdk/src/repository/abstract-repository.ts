import type { PaginatedResponse, PaginationParams } from '../response';

export abstract class AbstractRepository<T, K extends string = 'data'> {
  // Query Methods
  abstract findAll(): Promise<T[]>;
  abstract findAllPaginated(params: PaginationParams): Promise<PaginatedResponse<T, K>>;
  abstract findByCondition(condition: Partial<Record<keyof T, string>>): Promise<T | null>;
  abstract findByConditionPaginated(
    condition: Partial<Record<keyof T, string>>,
    params: PaginationParams,
  ): Promise<PaginatedResponse<T, K>>;
  abstract count(): Promise<number>;
  // Command Methods
  abstract create(item: T): Promise<T>;
  abstract update(id: string, item: Partial<T>): Promise<T | null>;
  abstract delete(id: string): Promise<boolean>;
  abstract updateOrCreate(item: T): Promise<T>;
}
