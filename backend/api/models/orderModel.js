const mongoose = require("mongoose")
const Schema = mongoose.Schema

const orderSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,    
        ref: 'User',                        
        required: true       
    },
    orderItems: {
          qty: { 
            type: Number, 
            required: true,
            default: 1
          },
          price: { type: Number, required: true },
          product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product",
          },
        },
    itemsPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    dateOrdered: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Order', orderSchema)