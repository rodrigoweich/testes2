"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teste = void 0;
const sdk_1 = require("@karrbo/sdk");
class Teste extends sdk_1.AbstractDomain {
    get name() {
        return this.props.name;
    }
    set name(name) {
        this.props.name = name;
    }
    create(props, id) {
        return new Teste(props, id);
    }
}
exports.Teste = Teste;
//# sourceMappingURL=teste.entity.js.map