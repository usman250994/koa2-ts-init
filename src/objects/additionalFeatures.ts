export default class AdditionalFeatures {
    public IsBasicChattingRequired: boolean;
    public IsProperChatSolutionRequired: boolean;
    public IsAnyCMSRequired: boolean;
    public IsComplicated: boolean;

    constructor(isAnyCMSRequired: boolean, IsProperChatSolutionRequired: boolean,
                isBasicChattingRequired: boolean, isComplicated: boolean) {
        this.IsAnyCMSRequired = isAnyCMSRequired;
        this.IsProperChatSolutionRequired = IsProperChatSolutionRequired;
        this.IsBasicChattingRequired = isBasicChattingRequired;
        this.IsComplicated = isComplicated;
    }
}
