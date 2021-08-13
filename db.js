const {Sequelize} = require('sequelize')
require('dotenv').config()

module.exports = new Sequelize(
        process.env.DBNAME, 
        process.env.DBUSER, 
        process.env.DBPASSWORD, 
        {
            dialect: 'postgres',
            host: process.env.DBHOST,
            port: process.env.DBPORT
        }

    )