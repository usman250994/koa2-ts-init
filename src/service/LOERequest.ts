import {LOERequstI} from '../interfaces/index';
import {LOERequst as CF} from '../objects/index';

export default function LOEResponseProcess(postedData: any) {
const {additionalFeatures, mobile, frontend, backend} = postedData;
const CompleteFormR: LOERequstI = new CF(additionalFeatures, backend, frontend, mobile);
return CompleteFormR;
}
