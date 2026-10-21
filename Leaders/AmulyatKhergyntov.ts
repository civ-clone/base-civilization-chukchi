import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Chukchi from '../Chukchi';

export class AmulyatKhergyntov extends Leader {
  static civilization(): typeof Civilization {
    return Chukchi;
  }

  name(): string {
    return 'Amulyat Khergyntov';
  }
}

export default AmulyatKhergyntov;
