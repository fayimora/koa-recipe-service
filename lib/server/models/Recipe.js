import mongoose from "mongoose";

const MongooseSchema = mongoose.Schema;

const RecipeSchema = new MongooseSchema({
  name: { type: String },
  cookingTime: { type: Number },
  image: { type: String },
  ingredients: [{ type: String, ref: "Ingredient" }]
});
export default mongoose.model("Recipe", RecipeSchema);
