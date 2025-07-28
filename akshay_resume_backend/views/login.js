const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const executeQuery = require('./utils/dbconnection')
require('dotenv').config();
async function Login(req, res){
    try {
        if(req.body.email && req.body.password){
        const email = req.body.email;
        const password = req.body.password;
        const query = `SELECT * FROM users where email = ? `
        const User = await executeQuery(query,[email]);

        if(!(User && User.length)){
            res.status(401).send({
                status: 401,
                status_message: "User not found!",
                data: {}
            })
        }
            const isMatch  = await bcrypt.compare(password, User[0].password);
            if(!isMatch){
                res.status(401).send({
                status: 401,
                status_message: "User or Password did't match!",
                data: {}
             })
            }
            
            const token = jwt.sign({
                id: User[0].id,
                email: email
            }, process.env.JWT_SECRET, {expiresIn:'1h'});

            res.status(200).send({
                status: 200,
                status_message: "Logged In Successfully!",
                data: {
                    token: token,
                    id: User[0].id,
                    email: User[0].email
                }
            })

        }else{
            res.status(404).send({
                status: 404,
                status_message: "BAD Request!!"
            })
        }

    } catch (error) {
        console.error(err.message);
        res.status(500).send({
            status: 500,
            status_message: "Internal server error",
            data: {}
        })
    }
}

module.exports = Login;