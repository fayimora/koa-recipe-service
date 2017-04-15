import mongoose from "mongoose";

const MongooseSchema = mongoose.Schema;

const UserSchema = new MongooseSchema({
  name: { type: String }
});

export default mongoose.model("User", UserSchema);
