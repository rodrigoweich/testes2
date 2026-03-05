import type { AbstractDomainID } from "./abstract-domain-id";
export declare abstract class AbstractDomain<Props, ID extends AbstractDomainID> {
    protected readonly props: Props;
    protected readonly _id: ID;
    protected constructor(props: Props, id: ID);
    get id(): AbstractDomainID;
    abstract create(props: Props, id: ID): AbstractDomain<Props, ID>;
}
//# sourceMappingURL=abstract-domain.d.ts.map