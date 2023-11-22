const express = require("express")
const router = express.Router()
const { signup, login, logout } = require('../controllers/authController')
const { authGoogle, authCallback } = require("../controllers/googleAuth")

router.post('/signup', signup)

router.post('/login', login)

router.get('/logout', logout)

//GOOGLE AUTH
router.get('/google', authGoogle)

//GOOGLE CALLBACK
router.get('/google/callback', authCallback)

module.exports = router