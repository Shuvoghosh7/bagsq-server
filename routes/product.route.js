const express = require("express");
const router=express.Router()
const productController=require('../controller/product.controller');

router.post('/product',productController.createProduct)
module.exports=router;