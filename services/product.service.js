const Product = require("../models/product");

exports.createProductService = async (data) => {
    const result = await Product.create(data)
    return result;
}
exports.getProductService = async () => {
    const result = await Product.find({})
    return result;
}
exports.getProductByIdService = async (id) => {
    const result = await Product.findOne({_id:id})
    return result;
}