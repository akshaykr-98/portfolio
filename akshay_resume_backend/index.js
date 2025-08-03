const http = require('http');
const express = require('express');
const app = express();
const env = require('dotenv').config();
const authRouter = require('./routes/protectedRoutes')
const publicRouter = require('./routes/publicRoutes')
const cors = require('cors');
const PORT = process.env.PORT || 8080;

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

app.use(cors());

/**app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
 */

app.get('/', (req, res) => {
  res.send("Welcome to Portfolio");
})
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});


// Parse JSON and form data
app.use(express.json()); // for application/json
app.use(express.urlencoded({ extended: true })); // for application/x-www-form-urlencoded

app.use('/api/auth', authRouter);
app.use('/api', publicRouter);


app.listen(PORT, () => {
  console.log("Application is running on port- " + PORT);

})



//----hosting frondend using backenf
/* 
const express = require('express');
const path = require('path');
const app = express();

// Serve React static files
app.use(express.static(path.join(__dirname, '../client/build')));

// API routes
app.use('/api', require('./routes/api'));

// Catch-all for React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server started');
});

*/




