"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityID = void 0;
const identifier_1 = require("./identifier");
class EntityID extends identifier_1.Identifier {
    constructor(id) {
        super(id ? id : '');
    }
}
exports.EntityID = EntityID;
