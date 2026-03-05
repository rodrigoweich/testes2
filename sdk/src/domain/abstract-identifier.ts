export abstract class AbstractIdentifier<T> {
    constructor(protected readonly value: T) { }

    public getValue(): T {
        return this.value;
    }

    public equals(id?: AbstractIdentifier<T>): boolean {
        if (id === null || id === undefined) return false;
        return id.getValue() === this.value;
    }

    public toString(): string {
        return String(this.value);
    }
}