const mysql = require('mysql2')

  const connection = mysql.createConnection({
    host: 'localhost',     // host for connection(127.0.0.1)
    port: 3306,            // default port for mysql is 3306
    database: 'master',      // database from which we want to connect our node application
    user: 'root',          // username of the mysql connection
    password: ''       // password of the mysql connection
})

connection.connect(function (err){
    if(err){
        console.log("error while connecting to database", JSON.stringify(err.message));
        return;
        
    }
    console.log("Successfully connected to the mysql database");
})

function executeQuery(query, values) {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

module.exports = executeQuery