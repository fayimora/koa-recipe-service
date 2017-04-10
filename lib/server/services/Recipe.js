import Repository from '../models';
import { omitAll, omitBy, mapValues, isString, isNull } from 'lodash/fp';
import { isEmpty } from 'lodash';
import compose from 'lodash/fp/compose';

export default class Recipe {
  /**
   * formats recipe query
   * @param query
   */
  static _formatRecipeQuery (query) {
    const mapValuesWithKeys = mapValues.convert({ 'cap': false });
    const format = (value, key) => {
      switch (key) {
        case 'cookingTime':
          return parseInt(value, 10);
        case 'ingredients':
          return {$in: value.split(',')};
        default:
          return (value && isString(value)) ? new RegExp(value, 'i') : value;
      }
    };
    return compose(omitAll(['ingredient']), mapValuesWithKeys(format), omitBy(isNull))(query);
  }

  /**
   * gets/filters all recipes
   * @returns {*}
   */
  static async getRecipes (query) {
    const dbQuery = this._formatRecipeQuery(query);
    const recipeResults = await Repository.Recipe.find(dbQuery).then(results => results);
    if (!recipeResults.length) {
      return 'Sorry, nothing matched your filter term';
    }
    return recipeResults;
  }

  /**
   * gets recipe by Id
   * @param _id
   * @returns {*}
   */
  static async getRecipeById (_id) {
    const recipe = await Repository.Recipe.findOne({_id}).then(result => result);
    if (isEmpty(recipe)) {
      return `Sorry, this recipe doesn't exist or may have been removed`;
    }
    return recipe;
  }
}
