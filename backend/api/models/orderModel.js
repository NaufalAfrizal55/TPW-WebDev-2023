const mongoose = require("mongoose")
const Schema = mongoose.Schema

const orderSchema = new Schema ({
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,    //refer ke schema lain
        ref: 'OrderItem',                         //refer ke schema OrderItem
        required: true
    }],
    totalPrice: {
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,    //refer ke schema lain
        ref: 'User',                         //refer ke schema user
        required: true       
    },
    dateOrdered: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Order', orderSchema)