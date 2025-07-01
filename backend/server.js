const express = require('express')
const app = express()
const connectDB=require('./config/dbConn')
const port = process.env.PORT || 4000;

//middlewares
app.use(express.json())
const cors = require('cors')
app.use(cors())
require('dotenv').config()
app.use("/image",express.static('uploads'))
connectDB()

//routes
//api endpoints
app.use('/api/prod',require('./routes/prodRou'))
app.use('/api/user',require('./routes/userRou'))
app.use('/api/cart',require('./routes/cartRou'))
app.use('/api/order',require('./routes/orderRou'))



app.get("/", (req, res) => {
  res.send("API Working")
})

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})
