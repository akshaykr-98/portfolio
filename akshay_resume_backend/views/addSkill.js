const executeQuery = require('./utils/dbconnection');

async function AddSkill(req, res) {
    if (!req.body) {
        return {
            status: 402,
            status_message: "BAD request!!!"
        };
    }
    
    try {

        let selectQuery =`SELECT * from skills where name = ?` 
        const skill = await executeQuery(selectQuery, [req.body['skill']]);
        if(skill && skill.length){     
            res.status(201).send({
                status: 201,
                status_message: "Skill already exists. You can update your skill."
            })
        }else{
        const query = 'CALL insert_skill(?, ?, ?, ?)';
        const values = [req.body.skill, req.body.description, req.body.start_date, req.body.rating];

        await executeQuery(query, values);
        res.status(200).send({
            status:200,
            status_message: "Skill added successfully."
        });
        }
       
    } catch (err) {
        console.error("Error Calling AddSkill:", err.message);
        res.status(500).send({ 
            status: 500,
            status_message: "Error while adding new skill" +err.message
        });
    }
}

module.exports = AddSkill;
