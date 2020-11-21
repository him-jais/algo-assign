const User = require('../models/user')
const _ =require('lodash')
module.exports.contact=(req,res)=>{
    //serialize input
    const body= _.pick(req.body,['firstName','email','lastName','message'])
    const user = new User(body)
    user.save()
    .then((user)=>{
       
        res.json(_.pick(user,['_id','email','firstName','lastName']))
    })
    .catch((err)=>{
        res.json(err)
    })
}