const mongoose = require('mongoose')
const Product = require('../models/productModel')

//GET ALL PRODUCTS 
exports.getAllProducts = async(req, res) => {
    const products = await Product.find().sort({price: 1})
    res.status(200).json(products)
}

//GET THE PRODUCT
exports.getTheProduct = async(req, res) => {
    const {id} = req.params
    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({error: " No such product"})
    }
    const product = await Product.findById(id)
    if(!product) {
        return res.status(404).json({error: "No such product"})
    }
    res.status(200).json(product)
}

//POST THE PRODUCT
exports.createProduct = async(req, res) => {
    if(!req.body){
        return res.status(400).json({error: 'Please fill in all the fields'})
    }
    //ADD DOC to DB
    try {
        const product = await Product.create({...req.body})
        res.status(200).json(product)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//UPDATE THE PRODUCT
exports.updateProduct = async(req, res) => {
    const {id} = req.params
    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({error: " No such product"})
    }
    const product = await Product.findOneAndUpdate({_id: id}, {...req.body})

    if(!product) {
        return res.status(404).json({error: "No such product"})
    }
    res.status(200).json(product)
}

//DELETE THE PRODUCT
exports.deleteProduct = async(req, res) => {
    const {id} = req.params
    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({error: " No such product"})
    }
    const product = await Product.findOneAndDelete({_id: id})

    if(!product) {
        return res.status(404).json({error: "No such product"})
    }
    res.status(200).json(product)
}
