const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const generateToken = require('../utils/createToken')

//SIGN UP (/auth/signup)
exports.signup = async(req, res) => {
    const {username, email, password, isAdmin} = req.body

    //CONFIRM DATA
    if(!username || !email || !password){
        return res.status(400).json({error: "All fields required"})
    }
    //CHECK DUPLICATE EMAIL
    const duplicate = await User.findOne({email}).lean().exec()

    if(duplicate){
        return res.status(409).json({message: "User already exists"})
    }

    //HASHING PASSWORD 
    const salt = await bcrypt.genSalt(10)
    const hashPW = await bcrypt.hash(password, salt)

    const newUser = new User({ username, email, "password": hashPW, isAdmin })
    try {
        //CREATE & STORE USER
        await newUser.save()
        generateToken(res, newUser._id)
        return res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
          })
    } catch (error){
        return res.status(400).json({error: error.message})
    }

}

//LOG IN METHOD (/auth/login)
exports.login = async(req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({message: 'All fields are required'})
    }
    //CEK apakah ada akun yg mau login
    const foundUser = await User.findOne({email}).exec()
    if(!foundUser){
        return res.status(401).json({message: 'Unauthorized (no email found)'})
    }

    //CEK PW benar belum
    const match = await bcrypt.compare(password, foundUser.password)
    if(!match){
        return res.status(401).json({message: 'Unauthorized (wrong password)'})
    }

    generateToken(res, foundUser._id)
    res.status(201).json({
        _id: foundUser._id,
        username: foundUser.username,
        email: foundUser.email,
        isAdmin: foundUser.isAdmin,
      })

}

//LOGOUT METHOD (POST /auth/logout)
exports.logout = (req, res) => {
    res.cookie("jwt", "", {
        httyOnly: true,
        expires: new Date(0),
      })
    res.status(200).json({ message: "Logged out successfully" })
}