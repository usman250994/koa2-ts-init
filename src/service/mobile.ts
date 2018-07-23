import {MobileI} from '../interfaces/index';
import {mobile as Mob} from '../objects/index';

export default function mobile() {
  const MobileR: MobileI = new Mob(true, true, true, true, true);
  return MobileR;
}
