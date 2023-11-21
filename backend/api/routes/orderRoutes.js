const express = require("express")
const router = express.Router()

const {getAllOrders, 
        createOrder, 
        getSingleOrder, 
        deleteOrder} = require('../controllers/orderController')

const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)

router.get('/', getAllOrders)

router.get('/:id', getSingleOrder)

router.post('/', createOrder)

router.delete('/:id', deleteOrder)

module.exports = router