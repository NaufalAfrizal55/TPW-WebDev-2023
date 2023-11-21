const express = require("express")
const router = express.Router()
const { getAllProducts, 
        getTheProduct, 
        createProduct, 
        updateProduct, 
        deleteProduct, } = require('../controllers/productController')
        
const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)

router.get('/', getAllProducts)

router.get('/:id', getTheProduct)

router.post('/', createProduct)

router.patch('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router