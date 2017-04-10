#!/usr/bin/env node
const Promise = require('bluebird');
const mongodb = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017/recipe_test_db`;
const colors = require('cli-color');
const sampleData = require('./data.json');
mongodb.connect(url, (err, db) => {
  if (err) {
    throw err;
  }
  const UserCollection = db.collection('users');
  const RecipeCollection = db.collection('recipes');
  const IngredientCollection = db.collection('ingredients');

  const prefillUsers = Promise.map(sampleData.users, function (user) {
    return UserCollection.insert(user);
  });

  const prefillRecipes = Promise.map(sampleData.recipes, function (recipe) {
    return RecipeCollection.insert(recipe);
  });

  const prefillIngredients = Promise.map(sampleData.ingredients, function (ingredient) {
    return IngredientCollection.insert(ingredient);
  });

  return Promise
    .all([prefillUsers, prefillRecipes, prefillIngredients])
    .then(results => {
      let sum = 0;
      results.forEach(result => { sum += result.length; });
      console.log(`Total Inserts: ${sum}\n`);
      process.exit(0);
    })
    .catch(error => {
      if (error && error.code === 11000) {
        console.error(`Duplicate entries detected!!!, ${colors.red('Drop Database')}, do ${colors.yellow('npm run start-dev')} and give this script another go :)`);
        process.exit(0);
      }
      throw error;
    });
});
