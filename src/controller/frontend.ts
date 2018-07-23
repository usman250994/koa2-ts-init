import { Context } from 'koa';
import { frontend } from '../service/index';

export default function get(ctx: Context) {
  ctx.body = { users: frontend(), time: Date.now() };
}
