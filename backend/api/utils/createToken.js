const jwt = require('jsonwebtoken')

const generateToken = (res, userId, username, isAdmin) => {
    const token = jwt.sign(
        { userId, username, isAdmin }, 
        process.env.JWT_SECRET,  
        {expiresIn: '7d'})
    
    res.cookie('jwt', token, {
        domain: 'tpw-web-dev-2023-backend.vercel.app',
        httpOnly: true,
        secure: true,
        sameSite: 'None', 
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000 //batas cookie 7 hari
    })
    return token
}

module.exports = generateToken