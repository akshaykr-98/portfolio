const executeQuery = require('./utils/dbconnection')

async function GetSkills(req, res) {
 let selectQuery;
    
  try {
    if (!req.body['skill']) {
      selectQuery =`SELECT * from skills `
      value = []
    }else {
      selectQuery =`SELECT * from skills where name = ?` 
      value = [req.body['skill']]
    }
    const skills = await executeQuery(selectQuery, value );
    if(skills && skills.length){
        res.status(200).send({
          status: 200,
          status_message: "Skill already exists.",
          data: skills
        });
     } else{
            res.status(201).send({
            status: 201,
            status_message: "Data Not found."
        });
      }
    }catch (err) {
    console.error("Error:", err.message);
    res.status(500).send({ 
        status: 500,
        status_message: "Internal Error while fetching data "+err.message 
    });
  }
}


module.exports = GetSkills;