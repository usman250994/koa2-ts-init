
export default class Mobile {
    public IsIPhoneAppRequired: boolean;
    public IsAndroidAppRequired: boolean;
    public IsLocationBasedWorkRequired: boolean;
    public IsOfflineSupportRequired: boolean;
    public NeedLowCostMobileSolution: boolean;
    public SuggestedAppApproach: string;
    public IsComplicated: boolean;

    constructor(isIPhoneAppRequired: boolean, isAndroidAppRequired: boolean, isLocationBasedWorkRequired: boolean,
                isOfflineSupportRequired: boolean, needLowCostMobileSolution: boolean, isComplicated: boolean) {
        this.IsIPhoneAppRequired = isIPhoneAppRequired;
        this.IsAndroidAppRequired = isAndroidAppRequired;
        this.IsLocationBasedWorkRequired = isLocationBasedWorkRequired;
        this.IsOfflineSupportRequired = isOfflineSupportRequired;
        this.NeedLowCostMobileSolution = needLowCostMobileSolution;
        this.SuggestedAppApproach = '';
        this.IsComplicated = isComplicated;
    }
}
