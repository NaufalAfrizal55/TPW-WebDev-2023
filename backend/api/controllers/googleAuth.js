const {google} = require('googleapis')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'http://localhost:5000/api/auth/google/callback'
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
          const createUser = await User.create({
            email: data.email,
            username: data.name,
          });
          res.json({ message: 'anjay' });
        } else {
          // Handle case when user already exists
          res.json({ message: 'User already exists' });
        }
      } catch (error) {
        console.log('Error:', error);
      }
      

    const accessToken = jwt.sign(
        {
            "UserInfo": {
            "email": user?.email,
            "isAdmin": user?.isAdmin
            }
        },
        process.env.ACCESS_TOKEN_SECRET, 
        {expiresIn: '10h'}
    )
    
    const refreshToken = jwt.sign(
        {"email": user?.email},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: '7d'}
    )
    
    res.cookie('jwt', refreshToken, {
        httpOnly: true, //accessible dri web server doang
        secure: true,   //harus https
        sameSite: 'None',   //bisa cross-site cookie!
        maxAge: 7 * 24 * 60 * 60 * 1000 //batas cookie 7 hari
    })
    //REDIRECT KE FRONTEND
    res.redirect('http://localhost:3000')
    res.redirect('http://localhost:5000/api/products') 
}