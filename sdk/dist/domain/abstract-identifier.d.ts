export declare abstract class AbstractIdentifier<T> {
    protected readonly value: T;
    constructor(value: T);
    getValue(): T;
    equals(id?: AbstractIdentifier<T>): boolean;
    toString(): string;
}
//# sourceMappingURL=abstract-identifier.d.ts.map