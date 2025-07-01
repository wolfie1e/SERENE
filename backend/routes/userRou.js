const express = require('express');
const userRou = express.Router();
const {loginUser,registerUser} = require('../controllers/userCon')

userRou.post('/register',registerUser)
userRou.post('/login',loginUser)

module.exports = userRou;