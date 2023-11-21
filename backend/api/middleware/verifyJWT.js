const jwt = require("jsonwebtoken")

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization
    if(!authHeader?.startsWith('Bearer ')){
        return res.status(401).json({message: 'Unauthorized JWT'})
    }
    const token = authHeader.split(' ')[1]

    jwt.verify(
        token, 
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Forbidden' })
            }
            req.email = decoded.UserInfo.email
            req.isAdmin = decoded.UserInfo.isAdmin
            next()
        }
        )
    
}
//verifyJWT diaplikasikan ke routes yg ingin di-protected

module.exports = verifyJWT