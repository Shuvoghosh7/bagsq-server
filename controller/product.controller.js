const { createProductService, getProductService, getProductByIdService, updateProductService, deleteProductService } = require("../services/product.service")

exports.createProduct = async (req, res, next) => {
  try {
    //create method
    const result = await createProductService(req.body)

    res.status(200).json({
      stauts: "success",
      massage: "successfully create a Product",
      data: result
    })
  } catch (error) {
    res.status(400).json({
      stauts: "fail",
      message: "Data is not inserted",
      error: error.message
    })
  }
}

exports.getProduct = async (req, res) => {
  /*  try {
     let filters={...req.query}
     //solt,page,limit, --- exclude
     const excludeField=['sort','page','limit']
     excludeField.forEach(field =>delete filters[field])

      //gt,li,get,lte
      let filterString=JSON.stringify(filters)
      filterString=filterString.replace(/\b(gt|gte|lt|Lte)\b/g, match => `$${match}`)
 
      filters=JSON.parse(filterString)
      
      if(req.query.fields){
       const fields=req.query.fields.split(',').join(' ')
       queries.fields=fields
       console.log(fields)
     }
     if(req.query.page){
       const{page=1,limit=10}=req.query;
       const skip=(page-1)*parseInt(limit);
       queries.skip=skip;
       queries.limit=parseInt(limit);
     }
     const record=await getProductService(filters,queries);
     res.send(record)
   } catch (error) {
     res.status(400).json({
       stauts:"fail",
       message: "Data is not found",
       error : error.message
     })
 
   } */
  try {
    //find by id
    let filters = { ...req.query }
    //solt,page,limit, --- exclude
    const excludeField = ['sort', 'page', 'limit']
    excludeField.forEach(field => delete filters[field])

    //gt,li,get,lte
    let filterString = JSON.stringify(filters)
    filterString = filterString.replace(/\b(gt|gte|lt|Lte)\b/g, match => `$${match}`)

    filters = JSON.parse(filterString)

    //
    const queries = {}
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ')
      queries.fields = fields
    }
    const product = await getProductService(filters, queries);
    res.send(product)
  } catch (error) {
    res.status(400).json({
      stauts: "fail",
      message: "Data is not found",
      error: error.message
    })
  }
}

exports.getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    //create method
    const product = await getProductByIdService(id);
    if (!product) {
      return res.status(400).json({
        stauts: "fail",
        error: "Could not finds a brand with this id"
      })
    }
    res.send(product)
  } catch (error) {
    res.status(400).json({
      stauts: "fail",
      message: "Data is not inserted",
      error: error.message
    })
  }
}

exports.updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const updatedQuantity = req.body.updatedQuantity;
  const updateDoc = {
    $set: {
      quantity: updatedQuantity,
    },
  };
  try {
    const result = await updateProductService(id, updateDoc);

    res.status(200).json({
      stauts: "success",
      massage: "successfully update the quantity",
    })
  } catch (error) {
    res.status(400).json({
      stauts: "fail",
      message: "Could not update",
      error: error.message
    })

  }

}

exports.deleteProduct=async(req,res,next)=>{
  try {
    const {id}=req.params;
    const result=await deleteProductService(id)
    if(!result.deletedCount){
      return res.status({
        stauts: "fail",
        error: "Could not delete the product",
      })
    }
    res.status(200).json({
      stauts: "success",
      massage: "Data delete successfully",
    })
    
  } catch (error) {
    res.status(400).json({
      stauts:"fail",
      message: "Product is not update",
      error : error.message
    })
  }

}