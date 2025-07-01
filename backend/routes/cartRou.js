const express = require('express');
const cartRou = express.Router();
const authMiddleware = require('../middleware/auth');

const {addToCart, getCart, removeFromCart} = require('../controllers/cartCon');

cartRou.post('/add',authMiddleware,addToCart)
cartRou.post('/get',authMiddleware,getCart)
cartRou.post('/remove',authMiddleware,removeFromCart)

module.exports = cartRou;