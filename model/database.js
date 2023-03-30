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

module.exports = user;