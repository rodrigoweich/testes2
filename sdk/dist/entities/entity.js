"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    _id;
    props;
    constructor(props, id) {
        this._id = id;
        this.props = props;
    }
    get id() {
        return this._id;
    }
}
exports.Entity = Entity;
