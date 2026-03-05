"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUID = void 0;
const uuid_1 = require("uuid");
const abstract_domain_id_1 = require("./abstract-domain-id");
class UUID extends abstract_domain_id_1.AbstractDomainID {
    constructor(id) {
        if (id && !(0, uuid_1.validate)(id))
            throw new Error("Invalid UUID format");
        super(id || (0, uuid_1.v4)());
    }
}
exports.UUID = UUID;
