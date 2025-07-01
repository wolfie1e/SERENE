const express = require('express');
const orderRou = express.Router();
const {placeOrder,verifyOrder,userOrders,listOrders,updateState, cancelOrder} = require('../controllers/orderCon');
const authMiddleware = require('../middleware/auth');

orderRou.get('/list',listOrders)
orderRou.get('/userorders',authMiddleware,userOrders)
orderRou.post('/verify',verifyOrder)
orderRou.post('/status',updateState)
orderRou.post('/place',authMiddleware,placeOrder)
orderRou.post("/cancel", authMiddleware, cancelOrder)

module.exports = orderRou;