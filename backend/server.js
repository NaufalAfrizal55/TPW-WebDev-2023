const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const connectDB = require('./api/config/connectDB')
const corsOptions = require('./api/config/cosrOptions')
require('dotenv').config()

//IMPORT ROUTES
const productRoutes = require('./api/routes/productRoutes')
const authRoutes = require('./api/routes/authRoutes')
const orderRoutes = require('./api/routes/orderRoutes')

const app = express()
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'));

//AUTH ROUTES
app.use('/api/auth', authRoutes)

//PRODUCTS ROUTES
app.use('/api/products', productRoutes)

//ORDER ROUTES
app.use('/api/order', orderRoutes)

mongoose.connection.once('open', () => {
    app.listen(process.env.PORT, () => {
        console.log(`listening on port http://localhost:${process.env.PORT} WENGDEV TPW`)
    })
})