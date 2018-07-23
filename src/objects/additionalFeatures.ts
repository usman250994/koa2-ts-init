export default class AdditionalFeatures {
    public IsBasicChattingRequired: boolean;
    public IsProperChatSolutionRequired: boolean;
    public IsAnyCMSRequired: boolean;

    constructor(isAnyCMSRequired: boolean, IsProperChatSolutionRequired: boolean,  isBasicChattingRequired: boolean) {
        this.IsAnyCMSRequired = isAnyCMSRequired;
        this.IsProperChatSolutionRequired = IsProperChatSolutionRequired;
        this.IsBasicChattingRequired = isBasicChattingRequired;
    }
}
