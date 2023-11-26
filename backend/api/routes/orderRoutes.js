const express = require("express")
const router = express.Router()

const {getAllOrders, 
        createOrder, 
        deleteOrder,
        getOrdersClient} = require('../controllers/orderController')

const verifyJWT = require("../middleware/verifyJWT")
const verifyAdmin = require("../middleware/verifyAdmin")

router.get('/', verifyJWT, verifyAdmin, getAllOrders)

router.get('/:id', getOrdersClient)

router.post('/', verifyJWT, createOrder)

router.delete('/:id', verifyJWT, verifyAdmin, deleteOrder)

module.exports = router