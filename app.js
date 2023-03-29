const express = require('express');

const cors = require('cors');

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','password',
{
    dialect: 'mysql',
    host: 'localhost'
});

const user = sequelize.define('expense',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps: false
})

const bodyParser = require('body-parser');

const path = require('path');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post('/expense',(req,res,next)=>{
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

app.get('/expense-data',(req,res,next)=>{
    user.findAll()
    .then(results=>{
        console.log("Success");
        res.json(results);
    })
    .catch(err=>console.log("There is error: ",err));
})

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(3000);