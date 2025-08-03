const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyToken(req, res, next) {
    console.log("===welcome to middleware", req.headers['authorization']);

    try {
        const token = req.headers['authorization']
        if (!token) {
            res.status(401).send({
                status: 301,
                status_message: "Please provide the token."
            })

        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

            if (err) {
                res.status(401).send({
                    status: 401,
                    status_message: "Invalid Token."
                })
            }

            req.user = decoded
            next();
        })
    } catch (error) {
        return {
            status: 401,
            status_message: `Invalid or expired token: ${error}`
        }
    }
}

module.exports = verifyToken;