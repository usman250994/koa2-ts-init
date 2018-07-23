import {LoeRequestI} from '../interfaces/index';
import {loeRequest as LOE} from '../objects/index';

export default function  loeRequest() {
  const LoeRequestR: LoeRequestI = new LOE(12, 'sdsdsds', true, 'sdsdsd');
  return LoeRequestR;
}
