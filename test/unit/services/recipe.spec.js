import proxyquire from 'proxyquire';
import MockRepo from '../../util/mocks/Repository';
import { expect } from 'chai';

const strictRequire = proxyquire.noCallThru();
const RecipeService = strictRequire('../../../lib/server/services/Recipe', {
  '../models': MockRepo
});

describe('Recipe Service', function () {
  it('should return recipe name from service', () => {
    return RecipeService.getRecipeById(0)
      .then((recipe) => {
        return expect(recipe.name).to.be.equal(`moimoi`);
      });
  });

  it('should return \'Sorry, nothing matched your filter term\' if it does not find a recipe', () => {
    return RecipeService.getRecipes({ name: 'lasagne' })
      .then((recipe) => {
        return expect(recipe).to.be.equal(`Sorry, nothing matched your filter term`);
      });
  });

  it('should return \'Sorry, this recipe doesn\'t exist or may have been removed\' if it does not find a recipe', () => {
    return RecipeService.getRecipeById(4)
      .then((recipe) => {
        return expect(recipe).to.be.equal(`Sorry, this recipe doesn't exist or may have been removed`);
      });
  });
});
