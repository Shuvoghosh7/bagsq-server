const mongoose = require("mongoose");
const validator = require('validator');
const{ObjectId}=mongoose.Schema.Types
const productSchema = mongoose.Schema({
      email: {
        type: String,
        lowercase: true,
        validate: [validator.isEmail, "Plese provide a valid Email"],
        unique: true,
        require: [true, "Email Address Require"],
    },
    productName:{
        type: String,
        require:true
    },
    description:{
        type: String,
        require:true
    },
    supplierName:{
        type: String,
        require:true
    },
    price:{
        type: Number,
        require:true
    },
    quantity:{
        type: Number,
        require:true
    },
    imageUrl:{
        type: String,
        require:true
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports=Product;