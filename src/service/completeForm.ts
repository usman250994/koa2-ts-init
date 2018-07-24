import {CompleteFormI} from '../interfaces/index';
import CompleteForm from '../objects/completeForm';
import {completeForm as CF} from '../objects/index';

export default function completeForm(postedData: any) {
const {additionalFeatures, mobile, frontend, backend} = postedData;
const CompleteFormR: CompleteForm = new CF(additionalFeatures, backend, frontend, mobile);
return CompleteFormR;
}
