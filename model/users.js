const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    staffId:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
},{timestamps:true});

let User = module.exports = mongoose.model('User', userSchema)