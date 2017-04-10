import { Promise } from 'bluebird';
import { find } from 'lodash';
const recipes = [
  { name: 'moimoi' },
  { name: 'lasagne' },
  { name: 'Roast chicken' }
];

export default {
  Recipe: {
    /**
     * Barebones find mock
     * @param query
     * @returns {Promise.<*>}
     */
    find: function (query) {
      const results = find(recipes, (recipe) => {
        return query.name.test(recipe.name);
      });
      return Promise.resolve(results);
    },
    /**
     * barebones findOne
     * @param query
     * @returns {Promise.<{name}>}
     */
    findOne: (query) => {
      return Promise.resolve(recipes[query._id] || []);
    }
  }
};
