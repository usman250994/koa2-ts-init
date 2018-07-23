import {AdditionalFeaturesI} from '../interfaces/index';
import {additionalFeatures} from '../objects/index';

export default function additonalFeatures() {
  const additionalFeaturesR: AdditionalFeaturesI = new additionalFeatures(true, true, true);
  return additionalFeaturesR;
}
