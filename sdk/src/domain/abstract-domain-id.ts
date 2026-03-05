import { AbstractIdentifier } from "./abstract-identifier";

export abstract class AbstractDomainID extends AbstractIdentifier<string> {
    constructor(id?: string) {
        super(id ? id : "");
    }
}
