const Order = require('../models/orderModel')

exports.getAllOrders = async(req, res) => {
  const orders = await Order.find().populate('user', 'username').populate('orderItems.product').sort({DateOrdered: -1})
  res.status(200).json(orders)
}

exports.getOrdersClient = async(req, res) =>{
    const clientOrder = await Order.find({user: req.params.id}).populate('user', 'username').populate('orderItems.product').sort({'dateOrdered': -1})
    if(!clientOrder) {
        return res.status(500).json({message: 'cannot get an order'})
    } 
    res.status(200).json(clientOrder);
}

exports.createOrder = async(req, res) => {
    try {
        const { user, orderItems } = req.body;
    
        if (orderItems && orderItems.length === 0) {
          res.status(400).json({error: "No order items"});
        }

        let itemsPrice = orderItems.qty * orderItems.price

        const order = new Order({user, orderItems, itemsPrice})
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}   

exports.deleteOrder = async(req, res) => {
    // Order.findByIdAndRemove(req.params.id).then(async order =>{
    //     if(order) {
    //         await order.orderItems.map(async orderItem => {
    //             await OrderItem.findByIdAndRemove(orderItem)
    //         })
    //         return res.status(200).json({success: true, message: 'the order is deleted!'})
    //     } else {
    //         return res.status(404).json({success: false , message: "order not found!"})
    //     }
    // }).catch(err=>{
    //    return res.status(500).json({success: false, error: err}) 
    // })
    const order = await Order.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "successfully delete the order"})
}

exports.deleteLAllOrder = async(req, res) => {
    const order = await Order.deleteMany()
    res.status(200).json({message: "successfully delete all orders"})
}