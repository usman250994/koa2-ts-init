import additionalFeatures from './additionalFeatures';
import backend from './backend';
import frontend from './frontend';
import mobile from './mobile';

export default interface LOERequestI {
    backend: number;
    frontend: number;
    mobile: number;
    additionalFeatures: number;
}
