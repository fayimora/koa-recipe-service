
export default function () {
  const COMMON_ERRORS = {
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
  };
  return async (ctx, next) => {
    try {
      await next();
      const status = ctx.status || COMMON_ERRORS.NOT_FOUND;
      if (status === 404) {
        ctx.throw(404, 'Not Found');
      }
    } catch (err) {
      ctx.status = err.status || COMMON_ERRORS.INTERNAL_SERVER_ERROR;
      ctx.body = err;
      // ctx.app.emit('error', err, ctx);
    }
  };
}
