"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ULID = void 0;
const ulid_1 = require("ulid");
const entity_id_1 = require("./entity-id");
class ULID extends entity_id_1.EntityID {
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
