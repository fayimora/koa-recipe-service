import Router from 'koa-router';

import UserService from '../services/User';

const userRouter = new Router();
userRouter.get('users', '/', async (ctx) => {
  ctx.body = await UserService.getUsers();
});

userRouter.post('users', '/', async (ctx) => {
  ctx.body = await UserService.addNewUser(ctx.request.body);
});

userRouter.get('users', '/:id', async (ctx) => {
  ctx.body = await UserService.getUserById(ctx.params.id);
});

export default userRouter;
