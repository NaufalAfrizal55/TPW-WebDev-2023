const express = require("express")
const router = express.Router()
const { signup, login, logout, checkCookie } = require('../controllers/authController')
const { authGoogle, authCallback } = require("../controllers/googleAuth")
const verifyJWT = require('../middleware/verifyJWT')
router.post('/signup', signup)

router.post('/login', login)

router.get('/logout', logout)

//CHECK AUTH
router.get('/check-cookie', verifyJWT, checkCookie)

//GOOGLE AUTH
router.get('/google', authGoogle)

//GOOGLE CALLBACK
router.get('/google/callback', authCallback)

module.exports = router