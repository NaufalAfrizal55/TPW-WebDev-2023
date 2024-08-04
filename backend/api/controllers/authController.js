const User = require('../models/userModel')
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
    const duplicate = await User.findOne({email})

    if(duplicate){
        return res.status(409).json({message: "User already exists"})
    }

    //HASHING PASSWORD 
    const salt = await bcrypt.genSalt(10)
    const hashPW = await bcrypt.hash(password, salt)

    try {
        //CREATE & STORE USER
        const newUser = new User({ username, email, password: hashPW, isAdmin })
        await newUser.save()
        generateToken(res, newUser._id, newUser.username, newUser.isAdmin)

        res.status(201).json({
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
    const foundUser = await User.findOne({email})
    if(!foundUser){
        return res.status(401).json({message: 'Unauthorized (no email found)'})
    }
    if(!foundUser.password){
        return res.status(400).json({message:"You don't create account from the web. Please try login with google"})
    }

    //CEK PW benar belum
    const match = bcrypt.compareSync(password, foundUser.password) 
    if(!match){
        return res.status(401).json({message: 'Unauthorized (wrong password)'})
    } 
        generateToken(res, foundUser._id, foundUser.username, foundUser.isAdmin)

        res.status(201).json({
            _id: foundUser._id,
            username: foundUser.username,
            email: foundUser.email,
            isAdmin: foundUser.isAdmin,
            })
    }

//LOGOUT METHOD (POST /auth/logout)
exports.logout = (req, res) => {
    res.clearCookie('jwt', {
        domain: "vercel.app",
        httpOnly: true,
        sameSite: 'None',
        secure: true,
      });
    // res.cookie("jwt", "", {
    //     // domain: 'vercel.app',
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: 'None',
    //     expires: new Date(0),
    //     })
    return res.status(200).json({ message: "Logged out successfully" })
}

exports.checkCookie = (req, res) => {
    res.json(req.cookies.jwt);
  }