const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type:String,
      enum:["admin","user"],
      default:"user"
  }
  },
  { versionKey: false }
);
const User = mongoose.model("user", usersSchema);
module.exports = User;
