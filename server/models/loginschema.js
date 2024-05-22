const mongoose = require('mongoose')

var login = mongoose.model('login',{
    name:{type:String},
    email:{type:String}, 
    password:{type:String}
})

module.exports = {login}