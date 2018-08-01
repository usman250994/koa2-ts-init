import { MobileI } from '../interfaces';

export default class Mobile implements MobileI {
    public IsLocationBasedWorkRequired: boolean;
    public IsOfflineSupportRequired: boolean;
    public IsBasicChattingRequired: boolean;
    public IsProperChatSolutionRequired: boolean;
    public NeedLowCostSolution: boolean;
    public NumberOfInterfaces: number;
    public IsIPhoneAppRequired: boolean;
    public IsAndroidAppRequired: boolean;
    public IsComplicated: boolean;

}
