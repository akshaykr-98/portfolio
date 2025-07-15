const mysql = require('mysql2')

// function dbconnectionn(){
  const connection = mysql.createConnection({
    host: '127.0.0.1',     // host for connection
    port: 3306,            // default port for mysql is 3306
    database: 'master',      // database from which we want to connect our node application
    user: 'root',          // username of the mysql connection
    password: ''       // password of the mysql connection
})

connection.connect(function (err){
    if(err){
        console.log("error while connecting to database",JSON.stringify(err), JSON.stringify(err.message));
        return;
        
    }
    console.log("Successfully connected to the mysql database");
})
// }
module.exports=connection