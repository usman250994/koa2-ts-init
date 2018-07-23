export default class Frontend {
    public IsConsumerFrontendRequired: boolean;
    public IsAdminPanelRequired: boolean;

    constructor(isConsumerFrontendRequired: boolean, isAdminPanelRequired: boolean) {
        this.IsAdminPanelRequired = isAdminPanelRequired;
        this.IsConsumerFrontendRequired = isConsumerFrontendRequired;
    }
}
