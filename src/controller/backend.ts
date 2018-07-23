import { Context } from 'koa';
import { backend } from '../service/index';

export default function get(ctx: Context) {
  ctx.body = { users: backend(), time: Date.now() };
}
