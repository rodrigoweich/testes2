import type { PaginatedResponse, PaginationParams } from "../response";
import { paginate } from "../response";
import type { AbstractRepository } from "./abstract-repository";

export class PrismaAbstractRepository<
    T,
    K extends string,
    Delegate extends {
        findMany(args?: unknown): Promise<T[]>;
        findFirst(args?: unknown): Promise<T | null>;
        count(args?: unknown): Promise<number>;
        create(args: unknown): Promise<T>;
        update(args: unknown): Promise<T>;
        delete(args: unknown): Promise<T>;
        upsert(args: unknown): Promise<T>;
    },
> implements AbstractRepository<T, K> {
    protected model: Delegate;
    protected key: K;

    constructor(model: Delegate, key: K) {
        this.model = model;
        this.key = key;
    }

    async findAll(): Promise<T[]> {
        return this.model.findMany();
    }

    async findAllPaginated(
        params: PaginationParams,
    ): Promise<PaginatedResponse<T, K>> {
        const { page, limit } = params;
        const skip = (page - 1) * limit;

        const [items, total] = await Promise.all([
            this.model.findMany({ skip, take: limit }),
            this.model.count(),
        ]);

        return paginate(items, page, limit, total, this.key);
    }

    async findByCondition(
        condition: Partial<Record<keyof T, unknown>>,
    ): Promise<T | null> {
        return this.model.findFirst({
            where: condition,
        });
    }

    async findByConditionPaginated(
        condition: Partial<Record<keyof T, unknown>>,
        params: PaginationParams,
    ): Promise<PaginatedResponse<T, K>> {
        const { page, limit } = params;
        const skip = (page - 1) * limit;

        const [items, total] = await Promise.all([
            this.model.findMany({
                where: condition,
                skip,
                take: limit,
            }),
            this.model.count({
                where: condition,
            }),
        ]);

        return paginate(items, page, limit, total, this.key);
    }

    async count(): Promise<number> {
        return this.model.count();
    }

    async create(item: T): Promise<T> {
        return this.model.create({ data: item });
    }

    async update(id: string, item: Partial<T>): Promise<T | null> {
        try {
            return await this.model.update({
                where: { id },
                data: item,
            });
        } catch {
            return null;
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            await this.model.delete({
                where: { id },
            });
            return true;
        } catch {
            return false;
        }
    }

    async updateOrCreate(item: T & { id: string }): Promise<T> {
        return this.model.upsert({
            where: { id: item.id },
            update: item,
            create: item,
        });
    }
}
