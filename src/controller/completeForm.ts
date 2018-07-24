import { Context } from 'koa';
import { completeForm } from '../service/index';

export default function post(ctx: Context) {
    ctx.response.body = completeForm(ctx.request.body);
}
