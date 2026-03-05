import type { AbstractDomainID } from "./abstract-domain-id";

export abstract class AbstractDomain<Props, ID extends AbstractDomainID> {
    protected readonly props: Props;
    protected readonly _id: ID;

    protected constructor(props: Props, id: ID) {
        this.props = props;
        this._id = id;
    }

    get id(): AbstractDomainID {
        return this._id
    }

    public equals(entity?: AbstractDomain<Props, ID>): boolean {
        if (entity === this) {
            return true;
        }
        if (!entity) {
            return false;
        }
        return entity.id.equals(this._id);
    }

    abstract create(props: Props, id: ID): AbstractDomain<Props, ID>;
}
