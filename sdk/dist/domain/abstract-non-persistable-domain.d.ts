import { AbstractDomain } from './abstract-domain';
import type { DomainID } from './domain-id';
export declare abstract class AbstractNonPersistableDomain<Props, TID extends DomainID = DomainID> extends AbstractDomain<Readonly<Props>, TID> {
    constructor(props: Props, id: TID);
}
//# sourceMappingURL=abstract-non-persistable-domain.d.ts.map