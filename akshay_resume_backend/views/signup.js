const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const executeQuery = require('./utils/dbconnection')

async function Signup(req, res){
    const {name,email,password,role} = req.body;
    try {
        if(email && password){
        const query = `SELECT * FROM users where email = ? `
        const result = await executeQuery(query,[email]);
        console.log("=====result of users", result);
        
        if((result && result.length)){
            res.status(201).send({
                status: 201,
                status_message: "User already exists!"
            })
        }else {
            console.log("new user");
            
        const hashedPasword = await bcrypt.hash(password, 8)
        const query = 'CALL insert_user(?, ?, ?, ?)'
        const values = [name, email, hashedPasword, role];
        const result = await executeQuery(query, values);
        console.log("====signup result", result);
        res.status(200).send({
            status: 200,
            status_message: "User signup Successfull. Please Login ✌🏻"
        })
      }
    }

    } catch (error) {
        console.error(err.message);
        res.status(201).send({
            status: 500,
            status_message: "Something went Wrong. Please try after some time."
        })
    }
}

module.exports = Signup;