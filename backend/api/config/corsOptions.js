const allowedOrigins = [
    'http://localhost:3000',
    'https://tpw-web-dev-2023-beanmasters-coffee-roastery.vercel.app'
]

const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not Allowed by CORS"));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
    // Tambahkan method preflight untuk menambahkan header yang dibutuhkan (ERROR SAAT UDH DIDEPLOY)
    // preflightContinue: true,
    methods: ["GET, HEAD, PUT, PATCH, POST, DELETE"],
    allowedHeaders: [
      "Access-Control-Allow-Private-Network",
      "Access-Control-Allow-Origin",
      "Content-Type",
      "Authorization",
    ],
  };
module.exports = corsOptions