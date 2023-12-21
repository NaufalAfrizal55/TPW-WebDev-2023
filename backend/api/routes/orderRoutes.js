const express = require("express")
const router = express.Router()

const {getAllOrders, 
        createOrder, 
        deleteOrder,
        getOrdersClient,
        deleteLAllOrder} = require('../controllers/orderController')

const verifyJWT = require("../middleware/verifyJWT")
const verifyAdmin = require("../middleware/verifyAdmin")

router.get('/', verifyJWT, verifyAdmin, getAllOrders)

router.get('/:id', getOrdersClient)

router.post('/', verifyJWT, createOrder)

router.delete('/:id', verifyJWT, verifyAdmin, deleteOrder)

router.delete('/', verifyJWT, verifyAdmin, deleteLAllOrder)

module.exports = router