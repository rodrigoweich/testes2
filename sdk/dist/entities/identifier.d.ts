export declare abstract class Identifier<T> {
    protected readonly value: T;
    constructor(value: T);
    getValue(): T;
    equals(id?: Identifier<T>): boolean;
    toString(): string;
}
//# sourceMappingURL=identifier.d.ts.map