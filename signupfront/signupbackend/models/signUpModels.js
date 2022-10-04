const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({

     fullName:{
        type:String,
        required:true
     },
     username:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true
     },
     password:{
        type:String,
        required:true,
        default:false
     }

})

module.exports = mongoose.model('mytable', signUpTemplate) 