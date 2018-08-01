import { AdditionalFeaturesI } from '../interfaces';

export default class AdditionalFeatures implements AdditionalFeaturesI {
    public IsAnyCMSRequired: boolean;
    public OneWayThirdPartyIntegrationRequired: boolean;
    public TwoWayThirdPartyIntegrationRequired: boolean;
    public IsComplicated: boolean;
}
