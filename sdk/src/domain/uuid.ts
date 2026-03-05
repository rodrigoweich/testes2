import { v4 as uuidv4, validate as validateUuid } from 'uuid';
import { AbstractDomainID } from './abstract-domain-id';

export class UUID extends AbstractDomainID {
    constructor(id?: string) {
        if (id && !validateUuid(id)) throw new Error("Invalid UUID format");
        super(id || uuidv4());
    }
}