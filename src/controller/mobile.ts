import { Context } from 'koa';
import { mobile } from '../service/index';

export default function get(ctx: Context) {
  ctx.body = { users: mobile(), time: Date.now() };
}
