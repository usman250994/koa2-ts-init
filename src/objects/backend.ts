export default class Backend {
    public IsBackendRequired: boolean;
    public IsComplicated: boolean;

    constructor(isBackendRequired: boolean, isComplicated: boolean) {
        this.IsBackendRequired = isBackendRequired;
        this.IsComplicated = isComplicated;
    }
}
