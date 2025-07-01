const express = require('express');
const prodRou = express.Router();
const {addprod,listprod,removeprod,addReview} = require('../controllers/prodCon')
const multer = require('multer');
const verifyJWT = require('../middleware/auth');

//storage engine for multer
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})
const upload = multer({storage})
prodRou.post('/add',upload.single('image'),addprod) 
prodRou.get('/list',listprod)
prodRou.delete("/remove",removeprod)
prodRou.post('/review', verifyJWT, addReview);

module.exports = prodRou;//