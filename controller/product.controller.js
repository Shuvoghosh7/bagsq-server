const { createProductService, getProductService } = require("../services/product.service")

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