const express = require("express")
const router = express.Router()

const {getAllOrders, 
        createOrder, 
        getSingleOrder, 
        deleteOrder} = require('../controllers/orderController')

const verifyJWT = require("../middleware/verifyJWT")
const verifyAdmin = require("../middleware/verifyAdmin")
router.use(verifyJWT)

router.get('/', verifyJWT, verifyAdmin, getAllOrders)

router.get('/:id',verifyJWT, getSingleOrder)

router.post('/', verifyJWT, createOrder)

router.delete('/:id', verifyJWT, verifyAdmin, deleteOrder)

module.exports = router