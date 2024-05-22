const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/DonorData',
{useNewUrlParser:true} ,err =>{
    if(!err)
    console.log('MongoDB connection succcessful')
    else
    console.log('Error! MongoDB connection failed')
})