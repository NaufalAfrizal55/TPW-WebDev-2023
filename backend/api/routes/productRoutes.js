const express = require("express")
const router = express.Router()
const { getAllProducts, 
        getTheProduct, 
        createProduct, 
        updateProduct, 
        deleteProduct, } = require('../controllers/productController')
        
const verifyAdmin = require("../middleware/verifyAdmin")
const verifyJWT = require("../middleware/verifyJWT")

router.get('/', getAllProducts)

router.get('/:id', getTheProduct)

router.post('/', verifyJWT, verifyAdmin, createProduct)

router.patch('/:id', verifyJWT, verifyAdmin, updateProduct)

router.delete('/:id', verifyJWT, verifyAdmin, deleteProduct)

module.exports = router