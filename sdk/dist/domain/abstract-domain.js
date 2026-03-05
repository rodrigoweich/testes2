"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractDomain = void 0;
class AbstractDomain {
    props;
    _id;
    constructor(props, id) {
        this.props = props;
        this._id = id;
    }
    get id() {
        return this._id;
    }
}
exports.AbstractDomain = AbstractDomain;
