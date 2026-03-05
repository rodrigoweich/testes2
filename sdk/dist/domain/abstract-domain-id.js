"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractDomainID = void 0;
const abstract_identifier_1 = require("./abstract-identifier");
class AbstractDomainID extends abstract_identifier_1.AbstractIdentifier {
    constructor(id) {
        super(id ? id : "");
    }
}
exports.AbstractDomainID = AbstractDomainID;
