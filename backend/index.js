const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const connectDB = require('./api/config/connectDB')
const corsOptions = require('./api/config/corsOptions')
require('dotenv').config()

//IMPORT ROUTES
const productRoutes = require('./api/routes/productRoutes')
const authRoutes = require('./api/routes/authRoutes')
const orderRoutes = require('./api/routes/orderRoutes')

const app = express()
connectDB()

// app.use(cors(corsOptions))

app.use(cors({ origin: "*" }));
app.use((req, res, next) => {
	res.header("Access-Controll-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Private-Network', 'true');
    res.header('Access-Control-Allow-Credentials', 'true');
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
	if (req.method === "OPTIONS") {
		return res.status(200).json({});
	}
	next();
});
// // ? End CORS Handling

app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.send("API TPW WEBDEV 2023")
})

//AUTH ROUTES
app.use('/api/auth', authRoutes)

//PRODUCTS ROUTES
app.use('/api/products', productRoutes)

//ORDER ROUTES
app.use('/api/order', orderRoutes)

mongoose.connection.once('open', () => {
    app.listen(process.env.PORT, () => {
        console.log(`listening on port http://localhost:${process.env.PORT} WEBDEV TPW`)
    })
})