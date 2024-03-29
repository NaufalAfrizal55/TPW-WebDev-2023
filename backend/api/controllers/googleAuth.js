const {google} = require('googleapis')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const generateToken = require('../utils/createToken')

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://tpw-web-dev-2023-backend.vercel.app/api/auth/google/callback'
)

const scopes = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
]

const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    include_granted_scopes: true,
})

exports.authGoogle = (req, res) => {
    const cookies = req.cookies
    if(cookies?.jwt){
        return res.redirect('https://tpw-web-dev-2023-beanmasters-coffee-roastery.vercel.app')
    } 
    res.redirect(authorizationUrl)
}

exports.authCallback = async(req, res) => {
    const {code} = req.query
    const {tokens} = await oauth2Client.getToken(code)
    oauth2Client.setCredentials(tokens)

    const oauth2 = google.oauth2({
        auth: oauth2Client,
        version: 'v2'
    })
    const {data} = await oauth2.userinfo.get()

    if(!data.email || !data.name){
        return res.json({
            data: data,
        })
    }
    try {
        const user = await User.findOne({ email: data.email });
        if (!user || user.length === 0) {
          const createUser = new User ({
            email: data.email,
            username: data.name,
          })
          await createUser.save()
          generateToken(res, createUser._id, user.username, user.isAdmin)
        } else {
            generateToken(res, user._id, user.username, user.isAdmin)
        }
      } catch (error) {
        return res.status(400).json({error: error.message})
      }
      
    //REDIRECT KE FRONTEND
    res.redirect('https://tpw-web-dev-2023-beanmasters-coffee-roastery.vercel.app')
}