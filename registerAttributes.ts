import Chukchi from './Chukchi';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Chukchi',
  nation: 'Chukotka',
  colors: ['#546E7A', '#ECEFF1'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Chukchi, name, value))
);
