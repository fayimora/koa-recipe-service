import mongoose from "mongoose";

const MongooseSchema = mongoose.Schema;

const IngredientSchema = new MongooseSchema({
  name: { type: String }
});

export default mongoose.model("Ingredient", IngredientSchema);
