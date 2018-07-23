import { Context } from 'koa';
import { loeRequest } from '../service/index';

export default function get(ctx: Context) {
  ctx.body = { users: loeRequest(), time: Date.now() };
}
