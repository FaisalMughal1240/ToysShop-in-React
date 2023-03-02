const jwt = require("jsonwebtoken");
const users = require("../Models/user");
const product = require("../Models/products");
exports.register = async function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let adminData = new users({
    name,
    email,
    password,
  });
  console.log(adminData);
  if (adminData) {
    res.status(200).json({
      message: "data added",
      adminData,
    });
  }
  await adminData.save();
};
exports.login = async function (req, res) {
  try {
    // check if the user exists
    const user = await users.findOne({ email: req.body.email });
    if (user) {
      //check if password matches
      const result = req.body.password === user.password;
      if (result) {
        res.status(200).json({
          message: "Login Successfully",
          status:true
        });
      } else {
        res.status(400).json({status: false, error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ status: false, error: "User doesn't exist" });
    }
  } catch  
  {
    res.status(404).json({
      message: "Internal Server Error",
   });
  }
};

exports.addproduct = async function (req, res) {
  try{
    let name = req.body.name;
    let vendor = req.body.vendor;
    let price = req.body.price;
    let image = req.body.image;
    let data = new product({
      name,
      vendor,
      price,
      image,
    });
    console.log(data);
    if (!data) {
      res.status(401).json({
        message: "Please Enter all the data",
      });
    }
    else{
      res.status(200).json({
        message: "data added",
        data
      });
    }
    await data.save();
  }
  catch{
    res.status(200).json({
      message: "Internal Server Error",
    });
  }
};
exports.viewproduct = async function (req, res) {
  try {
    let item = await product.find({});
    if (!item) {
      res.status(400).json({
        message: "No data Found",
      });
    }else{
      res.status(200).json({
        message: "All Products",
        item,
      });
    }
  } catch {
    res.status(404).json({
      message: "Internal Server Error",
    });
  }
};
exports.searchProducts = async function (req, res) {
  try {
    // console.log(req.body.name);
      const products=await product.find({ name:req.body.name });
      return res.status(201).json({
          message: "Reterived Successfully",
          products
      });
  }
  catch (error) {
      return res.status(500).json({
         error:"Internal Server Error" 
        });
  }
};
exports.searchPrice = async function (req, res) {
  try {
      const products = await product.find(
       {name:{$in:['Baby Cars','Way to Train']}}
        ).sort({price:-1})
      if(products){
        return res.status(201).json({
          message: "Reterived Products Successfully",
          products
      });
      }
      else{
        return res.status(400).json({
          message: "No Products Found",
      });
      }
  }
  catch (error) {
      return res.status(500).json({
         error:"Internal Server Error" 
        });
  }
};