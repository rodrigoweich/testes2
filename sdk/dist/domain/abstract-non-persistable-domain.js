"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractNonPersistableDomain = void 0;
const abstract_domain_1 = require("./abstract-domain");
class AbstractNonPersistableDomain extends abstract_domain_1.AbstractDomain {
    constructor(props, id) {
        super(Object.freeze(props), id);
    }
}
exports.AbstractNonPersistableDomain = AbstractNonPersistableDomain;
