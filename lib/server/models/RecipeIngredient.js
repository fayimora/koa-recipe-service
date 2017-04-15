import mongoose from "mongoose";

const MongooseSchema = mongoose.Schema;

const RecipeIngredientSchema = new MongooseSchema({
  recipeId: { type: String, ref: "Recipe" },
  ingredientId: { type: String, ref: "Ingredient" },
  quantity: { type: Number }
});

export default mongoose.model("RecipeIngredient", RecipeIngredientSchema);
