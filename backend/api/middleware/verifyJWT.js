const jwt = require("jsonwebtoken")
const User = require('../models/userModel')

const verifyJWT = async(req, res, next) => {
    let token
    token = req.cookies.jwt;
    if (token) {
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          req.user = await User.findById(decoded.userId).select("-password");
          next();
        } catch (error) {
          res.status(401).json({error: error.message});
        }
      } else {
        res.status(401).json({message: "Not authorized, no token."});
      }
}

module.exports = verifyJWT