const express = require("express");
const router=express.Router()
const productController=require('../controller/product.controller');

router.route('/product')
.get(productController.getProduct)
.post(productController.createProduct)

router.route('/product/:id')
.get(productController.getProductById)


module.exports=router;