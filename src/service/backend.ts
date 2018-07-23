import {BackendI} from '../interfaces/index';
import {backend as BE} from '../objects/index';

export default function backend() {
  const BackendR: BackendI = new BE(true);
  return BackendR;
}
