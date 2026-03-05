"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUID = void 0;
const uuid_1 = require("uuid");
const entity_id_1 = require("./entity-id");
class UUID extends entity_id_1.EntityID {
    constructor(id) {
        if (id && !(0, uuid_1.validate)(id))
            throw new Error("Invalid UUID format");
        super(id || (0, uuid_1.v4)());
    }
}
exports.UUID = UUID;
