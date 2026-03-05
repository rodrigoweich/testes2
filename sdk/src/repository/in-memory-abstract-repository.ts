import {
    type PaginatedResponse,
    type PaginationParams,
    paginate,
} from "../response";
import type { AbstractRepository } from "./abstract-repository";

export interface InMemoryAbstractRepositoryProps {
    getId: number | string;
}

export class InMemoryAbstractRepository<
    T extends InMemoryAbstractRepositoryProps,
> implements AbstractRepository<T, "data"> {
    public data: T[] = [];

    async findAll(): Promise<T[]> {
        return this.data;
    }

    async findAllPaginated(
        params: PaginationParams,
    ): Promise<PaginatedResponse<T, "data">> {
        const { page, limit } = params;
        const start = (page - 1) * limit;
        const end = start + limit;
        const items = this.data.slice(start, end);
        return paginate(items, page, limit, this.data.length);
    }

    async findByCondition(
        condition: Partial<Record<keyof T, string>>,
    ): Promise<T | null> {
        const item = this.data.find((item) =>
            Object.entries(condition).every(
                ([key, value]) => item[key as keyof T] === value,
            ),
        );
        return item || null;
    }

    async findByConditionPaginated(
        condition: Partial<Record<keyof T, string>>,
        params: PaginationParams,
    ): Promise<PaginatedResponse<T, "data">> {
        const filteredData = this.data.filter((item) =>
            Object.entries(condition).every(
                ([key, value]) => item[key as keyof T] === value,
            ),
        );
        const { page, limit } = params;
        const start = (page - 1) * limit;
        const end = start + limit;
        const items = filteredData.slice(start, end);
        return paginate(items, page, limit, filteredData.length, "data");
    }

    async count(): Promise<number> {
        return this.data.length;
    }

    async create(item: T): Promise<T> {
        this.data.push(item);
        return item;
    }

    async update(id: string, item: Partial<T>): Promise<T | null> {
        const index = this.data.findIndex((item) => item.getId.toString() === id);
        if (index === -1) {
            return null;
        }
        this.data[index] = { ...this.data[index], ...item };
        return this.data[index];
    }

    async delete(id: string): Promise<boolean> {
        const index = this.data.findIndex((item) => item.getId.toString() === id);
        if (index === -1) {
            return false;
        }
        this.data.splice(index, 1);
        return true;
    }

    async updateOrCreate(item: T): Promise<T> {
        const index = this.data.findIndex((i) => i.getId === item.getId);
        if (index !== -1) {
            this.data[index] = { ...this.data[index], ...item };
            return this.data[index];
        }
        this.data.push(item);
        return item;
    }
}
