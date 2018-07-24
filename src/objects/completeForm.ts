import { additionalFeatures, backend, frontend, mobile } from '.';
import { CompleteFormI } from '../interfaces';

export default class CompleteForm {
    public additionalFeatures: additionalFeatures;
    public backend: backend;
    public frontend: frontend;
    public mobile: mobile;

    constructor(AdditionalFeatures: additionalFeatures, Backend: backend,  Frontend: frontend, Mobile: mobile) {
        this.additionalFeatures = AdditionalFeatures;
        this.backend = Backend;
        this.frontend = Frontend;
        this.mobile = Mobile;
    }
}
