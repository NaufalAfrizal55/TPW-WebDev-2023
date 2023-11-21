const mongoose = require("mongoose")
const Schema = mongoose.Schema

const orderItemSchema = new Schema ({
    product: {
        type: mongoose.Schema.Types.ObjectId,    //refer ke schema lain
        ref: 'Product',                         //refer ke schema product
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('OrderItem', orderItemSchema)