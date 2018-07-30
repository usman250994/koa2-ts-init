import { Context } from 'koa';
import { LOEResponseProcess } from '../service/index';

export default function post(ctx: Context) {
    ctx.response.body = LOEResponseProcess(ctx.request.body);
}
