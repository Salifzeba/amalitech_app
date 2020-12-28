const mongoose = require('mongoose');

let foodSchema = mongoose.Schema({
    foodname:{
        type:String,
        required:true
    },
    image:{
        type:String,
        // required:true
    },
    description:{
        type:String,
        required:true
    },
    day:{
        type:String,
        required:true
    },
   
},{timestamps:true});

let Food = module.exports = mongoose.model('Food', foodSchema)