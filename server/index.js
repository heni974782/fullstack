const express = require("express")
//const Sequelize = require('sequelize');
const app = express()

// const sequelize = new Sequelize(
//     'fullstack',
//     'root',
//     'lilwayne', {
//     dialect: 'mysql',
//     host : 'localhost'  
//     }
    
// )


const db = require("./models")


db.sequelize.sync().then( () => {
    app.listen(3001, () => {
        console.log("server is up an running on port 3001")
    })
})

//module.exports = sequelize