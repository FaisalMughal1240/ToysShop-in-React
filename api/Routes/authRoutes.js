const express=require("express");
const router = express.Router();
const authMiddleware=require('./../Middleware/middleWare');
const authController=require('./../Controller/authController');
router.post('/login',authController.login);
router.post('/register' ,authController.register)
router.post('/addproducts' ,authController.addproduct)
router.get('/viewproducts' ,authController.viewproduct)
router.post('/search' ,authController.searchProducts)
router.get('/searchPrice' ,authController.searchPrice)
module.exports = router;