const http = require('http')
const express = require('express');
const app = express();
const port = 8080;
const addSkill = require('./views/addSkill')
const getSkill = require('./views/getSkill')
const updateSkill = require('./views/updateSkill')
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


// Parse JSON and form data
app.use(express.json()); // for application/json
app.use(express.urlencoded({ extended: true })); // for application/x-www-form-urlencoded


app.post('/addSkill', async (req, res) => {
    try {
        const skill = await getSkill(req.body['skill']);        
        if(skill && skill.length){
            
            res.status(201).send({
                status: 201,
                status_message: "Skill already exists. You can update your skill."
            })
        }else {
            const result = await addSkill(req.body)
            res.status(200).send({
                status:200,
                status_message: result['status_message']
            });
        }
    } catch (error) {
        res.status(500).send({ 
            status: 500,
            status_message: "Internal Server Error " +err.message
        });
    }    
}); 

app.post('/getSkill', async (req, res) => {
    try {
        const skills = await getSkill(req.body['skill']);
        if(skills && skills.length){
            res.status(200).send({
            status: 200,
            status_message: skills
        });
        }else{
            res.status(201).send({
            status: 201,
            status_message: "Data Not found."
        });
        }
    } catch (err) {
         res.status(500).send({ 
            status: 500,
            status_message: "Internal Server Error "+err.message 
        });
    }
});

app.post('/updateSkill',async (req,res) => {
    try {
        const skill = await getSkill(req.body['skill'])
        if(skill && skill.length){
            const result = await updateSkill(req.body, skill[0].id)
            res.status(200).send({
                status:200,
                status_message: result['status_message']
            })
        }else{
            const result = await addSkill(req.body)
            res.status(201).send({
                status:201,
                status_message: result['status_message']
            })
        }
    } catch (error) {
        res.status(500).send({ 
            status: 500,
            status_message: "Internal Server Error "+err.message 
        });
    }
    
})

app.listen(port, ()=>{
    console.log("Application is running on port "+port);
    
})





