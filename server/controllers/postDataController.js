const express = require('express')
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId

var {login} = require('../models/loginschema')
var {data} = require('../models/dataschema')
var {pwd} = require('../models/pwdschema')
const { query } = require('express')


router.post('/addpwd',(req,res)=>{
    var new_pwd = new pwd({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    new_pwd.save((err,docs)=>{
        if(!err)
        res.send(docs)
    })
})

router.post('/addlogin',(req,res)=>{
    var new_login = new login({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })

    new_login.save((err,docs)=>{
        if(!err){
            res.send(docs)
            console.log('Login Data inserted successfully')
        }    
        else {
            console.log('Error creating new record'+JSON.stringify(err,undefined,2))
        }
    })
})

router.get('/getLogin',(req,res)=>{
    var email = req.query.email
    var query = {email:email}
    login.find(query,(err,docs)=>{
        if(!err)
        res.send(docs)
        else
        console.log('Error while retrieving all records'+JSON.stringify(err,undefined,2))
    })
})

router.get('/getPwd',(req,res)=>{
    pwd.find((err,docs)=>{
        if(!err)
        res.send(docs)
    })
})

router.get('/fetchall',(req,res) =>{
    var search = req.query.search
    var blood = req.query.blood_grp
    var regex = new RegExp(search,'i')
    var query = {}
    if(search.length !=0 && blood == 'ALL')
        query = {$or:[{city:{$regex:regex}},{state:{$regex:regex}}]}
    if(search.length !=0 && blood != 'ALL')
        query = {$or:[{city:{$regex:regex}},{state:{$regex:regex}}],$and:[{blood_grp:blood}]}   
    if(search.length ==0 && blood == 'ALL')
        query = {}  
    if(search.length==0 && blood !='ALL')
        query={blood_grp:blood}
        
    data.find(query,(err,docs)=>{
        if(!err)
        res.send(docs)
        else 
        console.log('Error while retrieving all records'+JSON.stringify(err,undefined,2))

    })
})


router.post('/add',(req,res)=>{
    var new_data = new data ({
        first_name :req.body.first_name,
        last_name :req.body.last_name,
        type:req.body.type,
        email :req.body.email,
        phone:req.body.phone,
        blood_grp:req.body.blood_grp,
        city:req.body.city,
        state:req.body.state,
        prior_disease:req.body.prior_disease,
        diabetic:req.body.diabetic,
        price:req.body.price
        })
    new_data.save((err,docs) =>{
        if(!err)
        {
            res.send(docs)
            console.log('Data inserted succesfully')
        }
        else 
        console.log('Error creating new record'+JSON.stringify(err,undefined,2))
    })
})


router.delete('/deletedata/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send("No records with given id")

        data.findByIdAndRemove(req.params.id,(err,docs)=>{
            if(!err) res.send(docs)
            else console.log('Error while deleting given id')
        })
})

router.delete('/deletelogin',(req,res)=>{
    var emailq = req.query.email
    login.findOneAndRemove({email:emailq},function(err){
        login.find({},function(err){
        })
    })
})


router.delete('/deletepwd',(req,res)=>{
    var emailq =req.query.email
    pwd.findOneAndRemove({email:emailq},function(err){
    })
})
module.exports = router