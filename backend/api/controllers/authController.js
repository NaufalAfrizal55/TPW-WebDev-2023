const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


//SIGN UP (/auth/signup)
exports.signup = async(req, res) => {
    const {username, email, password, isAdmin} = req.body

    //CONFIRM DATA
    if(!username || !email || !password){
        return res.status(400).json({error: "All fields required"})
    }
    //CHECK DUPLICATE
    const duplicate = await User.findOne({username}).lean().exec()

    if(duplicate){
        return res.status(409).json({message: "duplicate username"})
    }

    //HASHING PASSWORD 
    const salt = await bcrypt.genSalt(10)
    const hashPW = await bcrypt.hash(password, salt)

    const userObject = { username, email, "password": hashPW, isAdmin }

    //CREATE & STORE USER
    const user = await User.create(userObject)

    if(user){
        res.status(200).json({message: `New User ${username} has been created`})
    } else {
        res.status(404).json({error: "Invalid data received"})
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

    // BIKIN ACCESS TOKEN (JWT) KARENA UDH BENER LOGIN NYA
    const accessToken = jwt.sign(
        {
            "UserInfo": {
                "email": foundUser.email,
                "isAdmin": foundUser.isAdmin
            }
        },
        process.env.ACCESS_TOKEN_SECRET, 
        {expiresIn: '7h'}
    )

    const refreshToken = jwt.sign(
        {"email": foundUser.email},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: '7d'}
    )

    //CREATE SECURE COOKIE with refresh token (nama cookie-nya jwt)
    res.cookie('jwt', refreshToken, {
        httpOnly: true, //accessible dri web server doang
        secure: true,   //harus https
        sameSite: 'None',   //bisa cross-site cookie!
        maxAge: 7 * 24 * 60 * 60 * 1000 //batas cookie 7 hari
    })

    //SEND accessToken berisi email dan roles
    res.json({ accessToken })
}

//LOGOUT METHOD (POST /auth/logout)
exports.logout = (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204) //No content
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true })
    res.json({ message: 'Cookie cleared' })
}