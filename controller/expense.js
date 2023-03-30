const user = require('../model/database');

const path = require('path');

exports.root = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','index.html'));
};

exports.expense = (req,res,next)=>{
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
}

exports.expenseData = (req,res,next)=>{
    user.findAll()
    .then(results=>{
        console.log("Success");
        res.json(results);
    })
    .catch(err=>console.log("There is error: ",err));
}

exports.expenseDataId = (req,res,next)=>{
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
}