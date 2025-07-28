const router = require('express').Router();
const addSkill = require('../views/addSkill');
const getSkill = require('../views/getSkill');
const UpdateSkill = require('../views/updateSkill');

const verifyToken= require('../views/utils/authmiddleware')

router.use(verifyToken)
router.post('/addSkill', addSkill); 
router.post('/getSkill', getSkill);
router.post('/updateSkill', UpdateSkill)
module.exports = router
