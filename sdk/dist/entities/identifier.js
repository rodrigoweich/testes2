"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identifier = void 0;
class Identifier {
    value;
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    equals(id) {
        if (id === null || id === undefined)
            return false;
        return id.getValue() === this.value;
    }
    toString() {
        return String(this.value);
    }
}
exports.Identifier = Identifier;
