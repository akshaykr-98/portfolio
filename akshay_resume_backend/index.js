const http = require('http')
const express = require('express');
const app = express()
const port = 8080;
const db = require('./views/utils/dbconnection')
// const Server = http.createServer((req,res) => {
//     res.writeHead(200,{"content-type":'application/json'})
//     const respone= {
//         Name: "Akshay kumar",
//         Project:"Portfolio",
//         description: "Created using Next js and Node Js"
//     }
//     res.end(JSON.stringify(respone))
// })
// Server.listen(5000, ()=>{
//     console.log("Server is running on port "+5000);
    
// })
app.get('/', (req,res)=>{
    res.send("Welcome to Portfolio");
})
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});
app.post('/submit-form', (req, res) => {
  res.send('Form submitted');
}); 


app.listen(port, ()=>{
    console.log("Application is running on port "+port);
    
})

db.query('SELECT DATABASE() AS db', (err, results) => {
    if (err) {
      console.error("Query Error:", err.message);
      return;
    }

    console.log("📦 Connected to Database:", results[0].db); // logs: master
  });

