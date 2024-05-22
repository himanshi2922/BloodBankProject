const mongoose = require('mongoose')

var data =mongoose.model('data',{
    first_name : {type:String},
    last_name :{type:String},
    type:{type:String},
    email :{type:String},
    phone:{type:String},
    blood_grp:{type:String},
    city:{type:String},
    state:{type:String},
    prior_disease:{type:String},
    diabetic:{type:String},
    price:{type:String}
})

module.exports = {data}