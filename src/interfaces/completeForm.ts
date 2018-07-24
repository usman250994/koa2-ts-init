import additionalFeatures from './additionalFeatures';
import backend from './backend';
import frontend from './frontend';
import mobile from './mobile';

export default interface CompleteFormI {
    backend: backend;
    frontend: frontend;
    mobile: mobile;
    additionalFeatures: additionalFeatures;
}
