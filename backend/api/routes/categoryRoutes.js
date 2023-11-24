const express = require("express")
const router = express.Router()

const { listCategory } = require('../controllers/categoryController')

router.get('/category', listCategory)

module.exports = router