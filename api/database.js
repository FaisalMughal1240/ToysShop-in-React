const mongoose = require("mongoose");
const mongodb = require("mongodb").MongoClient;
const mongoURI =
  "mongodb+srv://faisal:faisal@cluster0.rccmoqr.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
const connectToMongo = (req, res) => {
  try {
    mongoose.connect(mongoURI, () => {
      console.log("Connected to Mongo Successfully");
    });
  } catch (error) {
    return res.status(404).json({
      message: "Check your internet connection",
    });
  }
};
module.exports = connectToMongo;
