const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
const User = new Schema({
  name : {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: false,
  },
  password: {
    type: String,
    require: false,
  },
});
const Models = mongoose.model("User", User);

module.exports = Models;
