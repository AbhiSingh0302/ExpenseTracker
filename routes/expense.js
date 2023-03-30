const express = require('express');

const path = require('path');

const user = require('../model/database');

const router = express.Router();

router.post('/expense',(req,res,next)=>{
    let userData = req.body;
    console.log("userData: ",userData);
   const response =  user.create({
        amount: userData.amount,
        description: userData.desciption,
        category: userData.category
    })
    .then(result => {
        console.log("success post: ",result);
        res.status(200).json({
            message: "Successfully Posted",
            data: result
        })
    })
    .catch(err => console.log("There is error: ",err));
});

module.exports = router;