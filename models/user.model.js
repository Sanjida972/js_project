import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
});


userSchema.set("toJSON", {
  virtuals: true, // adds 'id'
  versionKey: false, // removes '__v'
  transform: function (doc, ret) {
    delete ret._id; // remove the _id field
  },
});

const User = mongoose.model("User", userSchema);
export default User;
