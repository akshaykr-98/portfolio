const Login = require('../views/login');
const Signup = require('../views/signup');

const router = require('express').Router();

router.post('/login', Login)
router.post('/signup', Signup)

module.exports = router;
