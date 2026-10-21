import Chukchi from './Chukchi';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

// The first is the capital.
(
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
  ] as string[]
).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Chukchi, i === 0))
);
