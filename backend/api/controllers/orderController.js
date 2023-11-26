const Order = require('../models/orderModel')
const OrderItem = require("../models/orderItem")

function calcPrices(orderItems) {
    const itemsPrice = orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
  
    const shippingPrice = itemsPrice > 100 ? 0 : 10;
    const taxRate = 0.15;
    const taxPrice = (itemsPrice * taxRate).toFixed(2);
  
    const totalPrice = (
      itemsPrice +
      shippingPrice +
      parseFloat(taxPrice)
    ).toFixed(2);
  
    return {
      itemsPrice: itemsPrice.toFixed(2),
      shippingPrice: shippingPrice.toFixed(2),
      taxPrice,
      totalPrice,
    };
  }

exports.getAllOrders = async(req, res) => {
    try {
        const orders = await Order.find({}).populate("user", "id username");
        res.json(orders);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

// exports.getUserOrders = async (req, res) => {
//     try {
//       const orders = await Order.find({ user: req.user._id });
//       res.json(orders);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };

exports.getSingleOrder = async(req, res) =>{
    const order = await Order.findById(req.params.id)
    .populate('user', 'name')
    if(!order) {
        return res.status(500).json({message: 'cannot get an order'})
    } 
    res.status(200).json(order);
}

exports.createOrder = async(req, res) => {
    try {
        const { orderItems, shippingAddress, paymentMethod } = req.body;
    
        if (orderItems && orderItems.length === 0) {
          res.status(400);
          throw new Error("No order items");
        }
    
        const itemsFromDB = await Product.find({
          _id: { $in: orderItems.map((x) => x._id) },
        });
    
        const dbOrderItems = orderItems.map((itemFromClient) => {
          const matchingItemFromDB = itemsFromDB.find(
            (itemFromDB) => itemFromDB._id.toString() === itemFromClient._id
          );
    
          if (!matchingItemFromDB) {
            res.status(404);
            throw new Error(`Product not found: ${itemFromClient._id}`);
          }
    
          return {
            ...itemFromClient,
            product: itemFromClient._id,
            price: matchingItemFromDB.price,
            _id: undefined,
          };
        });
    
        const { itemsPrice, taxPrice, shippingPrice, totalPrice } =
          calcPrices(dbOrderItems);
    
        const order = new Order({
          orderItems: dbOrderItems,
          user: req.user._id,
          shippingAddress,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
        });
    
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
      } catch (error) {
        res.status(500).json({ error: error.message });
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