import { decodeTime, ulid } from "ulid";
import { AbstractDomainID } from "./abstract-domain-id";

export class ULID extends AbstractDomainID {
    constructor(id?: string) {
        if (id) {
            try {
                decodeTime(id);
            } catch {
                throw new Error("Invalid ULID format");
            }
        }
        super(id || ulid());
    }
}
