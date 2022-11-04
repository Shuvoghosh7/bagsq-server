const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    userEmail: {
        type: String,
        require: true
    },
    productName: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    supplierName: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;