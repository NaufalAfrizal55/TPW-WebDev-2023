const mongoose = require("mongoose")
const Schema = mongoose.Schema

const orderSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,    
        ref: 'User',                        
        required: true       
    },
    orderItems: [
        {
          name: { type: String, required: true },
          qty: { type: Number, required: true },
          image: { type: String, required: true },
          price: { type: Number, required: true },
          product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product",
          },
        },
      ],
    totalPrice: {
        type: Number,
    },
    dateOrdered: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Order', orderSchema)