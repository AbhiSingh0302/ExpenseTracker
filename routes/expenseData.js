const express = require('express');

const user = require('../model/database');

const path = require('path');

const router = express.Router();

router.get('/expense-data',(req,res,next)=>{
    user.findAll()
    .then(results=>{
        console.log("Success");
        res.json(results);
    })
    .catch(err=>console.log("There is error: ",err));
});

router.get('/expense-data/:id',(req,res,next)=>{
    console.log('req id: ',req.params.id);
    user.destroy({
        where:{
            id: req.params.id
        }
    })
    .then((data) => {
        res.status(200).json({
            message: "Successfully deleted",
        })
    })
    .catch((err) => {
        res.status(404).json({
            message: 'Failed',
        })
    });
})

module.exports = router;