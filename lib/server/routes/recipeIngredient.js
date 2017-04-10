import Router from 'koa-router';
import RecipeIngredientMap from '../models/RecipeIngredient';
const ingredientRouter = new Router();

ingredientRouter.get('ingredient', '/:id', async function (ctx) {
  ctx.body = await RecipeIngredientMap.getIngredientsByRecipeId(ctx.params.id);
});

ingredientRouter.get('ingredient', '/', async function (ctx) {
  ctx.body = await RecipeIngredientMap.getIngredientsByRecipeId(ctx.params.id);
});
export default ingredientRouter;
