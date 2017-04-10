'use strict';

import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';

import router from './routes';
import errorHandler from './middlewares/errorHandler';

export default () => {
  const app = new Koa();
  app.use(logger());
  app.use(bodyParser());
  app.use(errorHandler());
  app.use(router.routes());
  app.use(router.allowedMethods());

  app.on('error', (err, ctx) => {
    console.log(err);
  });
  return app;
};
