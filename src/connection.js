const mysql = require('mysql')
const { mySQLConnect } = require('./config')

const connection = mysql.createConnection(mySQLConnect)

connection.connect((err, conn)=>{
  if(err){
    console.log('Validar Usuario o contraseña, ha ocurrido el error: '+err)
  }else{
    console.log('Conexión exitosa')
    return conn
  }
})

module.exports = connection