"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ULID = void 0;
const ulid_1 = require("ulid");
const abstract_domain_id_1 = require("./abstract-domain-id");
class ULID extends abstract_domain_id_1.AbstractDomainID {
    constructor(id) {
        if (id) {
            try {
                (0, ulid_1.decodeTime)(id);
            }
            catch {
                throw new Error("Invalid ULID format");
            }
        }
        super(id || (0, ulid_1.ulid)());
    }
}
exports.ULID = ULID;
