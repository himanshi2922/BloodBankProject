const mongoose = require('mongoose')

var pwd = mongoose.model('pwd',{
    name:{type:String},
    email:{type:String}, 
    password:{type:String}
})

module.exports={pwd}