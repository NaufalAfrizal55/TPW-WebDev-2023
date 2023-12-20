const jwt = require('jsonwebtoken')

const generateToken = (res, userId, username) => {
    const token = jwt.sign(
        { userId, username }, 
        process.env.JWT_SECRET,  
        {expiresIn: '7d'})
    
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'None', 
        maxAge: 7 * 24 * 60 * 60 * 1000 //batas cookie 7 hari
    })
    return token
}

module.exports = generateToken