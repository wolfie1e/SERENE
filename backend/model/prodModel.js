const mongoose = require('mongoose');
const prodSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    }

})
const prodModel = mongoose.models.prod || mongoose.model('prod', prodSchema)
module.exports = prodModel