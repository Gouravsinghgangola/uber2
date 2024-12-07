const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: "string",
      required: true,
      minlenght: [4, "firstname must be atlest 4 characters long"],
    },
    lastname: {
      type: "string",
      minlenght: [4, "firstname must be atlest 4 characters long"],
    },
  },
  password: {
    type: "string",
    required: true,
    select: false,
  },
  socketId: {
    type: "string",
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};
userSchema.methods.comparePassword = async function () {
  return await bcrypt.compare(password, this.password);
};
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;