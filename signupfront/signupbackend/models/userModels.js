const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

     fullName:String,
     username:String,
     email:String,
     password:String
     
    
    })


module.exports = mongoose.model("mytable", userSchema);
