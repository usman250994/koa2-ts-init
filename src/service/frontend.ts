import {FrontendI} from '../interfaces/index';
import {frontend as FE} from '../objects/index';

export default function frontend() {
  const FrontendR: FrontendI = new FE(true, true);
  return FrontendR;
}
