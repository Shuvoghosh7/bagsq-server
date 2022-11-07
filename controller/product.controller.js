const { createProductService, getProductService, getProductByIdService, updateProductService } = require("../services/product.service")

exports.createProduct=async (req, res, next) => {
    try {
      //create method
      const result=await createProductService(req.body)
  
      res.status(200).json({
        stauts: "success",
        massage: "successfully create a Product",
        data: result
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not inserted",
        error : error.message
      })
    }  
  }

  exports.getProduct=async (req, res) => {
    try {
      //create method
      const record=await getProductService();
      res.send(record)
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not found",
        error : error.message
      })
  
    }
  }

  exports.getProductById=async (req, res, next) => {
    const {id}=req.params;
    try {
      //create method
      const product=await getProductByIdService(id);
      if(!product){
        return res.status(400).json({
            stauts:"fail",
            error : "Could not finds a brand with this id"
          })
      }
      res.send(product)
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not inserted",
        error : error.message
      })
    }  
  }

  exports.updateProduct=async (req, res, next) => {
    const {id}=req.params;
    try {
      const result =await updateProductService(id,req.body);
     
      res.status(200).json({
        stauts: "success",
        massage: "successfully update the quantity",
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Could not update",
        error : error.message
      })
  
    }
    
  }