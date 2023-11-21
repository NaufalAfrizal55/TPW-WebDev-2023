const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0.0
    },
    countInStock: {
        type: Number,
        min: 0,
        max: 255,
        required: true
    },
    image: {
        type: String,        
    },
    rating: {
        type: Number,
        default: 0,
    }
}, {timestamps: true})

module.exports = mongoose.model('Product', productSchema)