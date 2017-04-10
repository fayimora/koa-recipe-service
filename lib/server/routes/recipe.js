
import Router from 'koa-router';
import RecipeService from '../services/Recipe';
import { isArray, isString } from 'lodash';

const recipeRouter = new Router();

recipeRouter.get('getRecipes', '/', async function (ctx) {
  const recipes = await RecipeService.getRecipes(ctx.query || {});
  if (!isArray(recipes) && isString(recipes)) {
    ctx.throw(404, recipes);
  }
  ctx.body = recipes;
});

recipeRouter.get('getRecipeById', '/:id', async function (ctx) {
  const recipe = await RecipeService.getRecipeById(ctx.params.id);
  if (isString(recipe)) {
    ctx.throw(404, recipe);
  }
  ctx.body = recipe;
});

export default recipeRouter;
