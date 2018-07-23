import { Context } from 'koa';
import { additionalFeatures } from '../service/index';

export default function get(ctx: Context) {
  ctx.body = { users: additionalFeatures(), time: Date.now() };
}
