import * as compose from 'koa-compose';
import * as Router from 'koa-router';
// Import all routes
import additionalFeatures from './additionalFeatures';
import backend from './backend';
import frontend from './frontend';
import loeRequest from './loeRequest';
import mobile from './mobile';
import completeForm from './completeForm';

export default () => compose([
  additionalFeatures(),
  backend(),
  mobile(),
  loeRequest(),
  frontend(),
  completeForm(),
]);
