"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chukchi_1 = require("./Chukchi");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Chukchi',
    nation: 'Chukotka',
    colors: ['#546E7A', '#ECEFF1'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Chukchi_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map