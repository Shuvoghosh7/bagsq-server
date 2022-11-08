const Product = require("../models/product");

exports.createProductService = async (data) => {
    const result = await Product.create(data)
    return result;
}
exports.getProductService = async (filters,queries) => {
    /* const products = await Product.find(filters).select(queries.fields)
    return products; */
    const result = await Product.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .sort(queries.sortBy)
    .select(queries.fields)
    return result;
}
exports.getProductByIdService = async (id) => {
    const result = await Product.findOne({_id:id})
    return result;
}

exports.updateProductService = async (id,data) => {
    const result = await Product.updateOne({_id:id},data,{
        runValidators:true
    })
    return result;
}

exports.deleteProductService = async (id) => {
    const result = await Product.deleteOne({_id:id})
    return result;
}