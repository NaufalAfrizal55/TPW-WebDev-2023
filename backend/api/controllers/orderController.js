const Order = require('../models/orderModel')
const OrderItem = require("../models/orderItem")

exports.getAllOrders = async(req, res) => {
    const orderList = await Order.find().populate('user', 'name').sort({'dateOrdered': -1})
    if(!orderList){
        return res.status(404).json({message: "Cannot get order list"})
    }
    res.status(200).json(orderList)
}

exports.getSingleOrder = async(req, res) =>{
    const order = await Order.findById(req.params.id)
    .populate('user', 'name')
    .populate({ 
        path: 'orderItems', populate: {
            path : 'product', populate: 'category'} 
        });

    if(!order) {
        return res.status(500).json({message: 'cannto get an order'})
    } 
    res.status(200).json(order);
}

exports.createOrder = async(req, res) => {
    const orderItemsIds = Promise.all(req.body.orderItems.map(async (orderItem) =>{
        let newOrderItem = new OrderItem({
            quantity: orderItem.quantity,
            product: orderItem.product
        })

        newOrderItem = await newOrderItem.save();

        return newOrderItem._id;
    }))
    const orderItemsIdsResolved =  await orderItemsIds;

    const totalPrices = await Promise.all(orderItemsIdsResolved.map(async (orderItemId)=>{
        const orderItem = await OrderItem.findById(orderItemId).populate('product', 'price');
        const totalPrice = orderItem.product.price * orderItem.quantity;
        return totalPrice
    }))
    const totalPrice = totalPrices.reduce((a,b) => a +b , 0);

    //ADD DOC to DB
    try {
        const order = await Order.create({orderItems: orderItemsIdsResolved,
            totalPrice: totalPrice,
            user: req.body.user})
        res.status(200).json(order)
    } catch(error){
        res.status(400).json({message: "Cannot create an order"})
    }    
}

exports.deleteOrder = (req, res) => {
    Order.findByIdAndRemove(req.params.id).then(async order =>{
        if(order) {
            await order.orderItems.map(async orderItem => {
                await OrderItem.findByIdAndRemove(orderItem)
            })
            return res.status(200).json({success: true, message: 'the order is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "order not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
}