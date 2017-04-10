import Router from 'koa-router';
import user from './user';
import recipe from './recipe';
import recipeIngredients from './recipeIngredient';

const root = new Router();
root.use('/api/users', user.routes(), user.allowedMethods());
root.use('/api/recipes', recipe.routes(), recipe.allowedMethods());
root.use('/api/recipe/ingredients', recipeIngredients.routes(), recipeIngredients.allowedMethods());

export default root;
