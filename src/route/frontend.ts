import { methodNotAllowed, notImplemented } from 'boom';
import * as compose from 'koa-compose';
import * as Router from 'koa-router';

import {frontend as Ctrl} from '../controller/';

const router = new Router({
  prefix: '/frontend',
});

router.get('/', Ctrl);

const routes = router.routes();
const allowedMethods = router.allowedMethods({
  methodNotAllowed: () => methodNotAllowed(),
  notImplemented: () => notImplemented(),
  throw: true,
});

export default () => compose([
  routes,
  allowedMethods,
]);
