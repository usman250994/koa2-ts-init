export default class Frontend {
    public IsConsumerFrontendRequired: boolean;
    public IsAdminPanelRequired: boolean;
    public IsComplicated: boolean;

    constructor(isConsumerFrontendRequired: boolean, isAdminPanelRequired: boolean, iscomplicated: boolean) {
        this.IsAdminPanelRequired = isAdminPanelRequired;
        this.IsConsumerFrontendRequired = isConsumerFrontendRequired;
        this.IsComplicated = iscomplicated;
    }
}
