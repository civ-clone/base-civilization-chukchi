"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chukchi_1 = require("./Chukchi");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
// The first is the capital.
[
    'Anadyr',
    'Uelen',
    'Lorino',
    'Lavrentiya',
    'Neshkan',
    'Inchoun',
    'Enurmino',
    'Vankarem',
    'Ryrkaypiy',
    'Yanrakynnot',
    'Nunligran',
    'Enmelen',
    'Sireniki',
    'Provideniya',
    'Konergino',
    'Amguema',
    'Kanchalan',
    'Uelkal',
    'Rytkuchi',
    'Ilirney',
    'Keperveem',
    'Egvekinot',
    'Pevek',
    'Bilibino',
    'Markovo',
    'Omolon',
    'Yanranay',
    'Nutepelmen',
    'Chaplino',
    'Snezhnoye',
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Chukchi_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map