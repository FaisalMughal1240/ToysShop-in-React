const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
const Product = new Schema({
  name : {
    type: String,
    require: true,
  },
  vendor: {
    type: String,
    require: false,
  },
  price: {
    type: Number,
    require: false,
  },
  image: {
    type: String,
    require: false,
  },
  date: {
    type: Date,
    default: Date.now,
    timestamps: true
  },
});
const Models = mongoose.model("Product", Product);

module.exports = Models;
