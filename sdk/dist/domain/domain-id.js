"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainID = void 0;
const identifier_1 = require("./identifier");
class DomainID extends identifier_1.Identifier {
    constructor(id) {
        super(id ? id : '');
    }
}
exports.DomainID = DomainID;
