import { EntityID } from "./entity-id";
export declare abstract class Entity<T, TID extends EntityID> {
    protected readonly _id: TID;
    readonly props: T;
    constructor(props: T, id: TID);
    get id(): TID;
    abstract create(props: T, id: TID): Entity<T, TID>;
}
//# sourceMappingURL=entity.d.ts.map