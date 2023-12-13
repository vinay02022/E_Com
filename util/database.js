// const mysql=require('mysql2')
// const pool=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'nodes_complete',
//     password:'nodecomplete'
// })
// module.exports=pool.promise()

const Sequelize=require('sequelize')
const sequelize=new Sequelize('nodes_complete','root','nodecomplete',{dialect:'mysql',host:'localhost'})
module.exports=sequelize