const Product = require("../models/product");

exports.createProductService = async (data) => {
    const result = await Product.create(data)
    return result;
}