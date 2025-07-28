const executeQuery = require('./utils/dbconnection');

async function UpdateSkill(req,res){
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
         const description = req.body?.description ? req.body?.description : skill[0].description;
         const rating = req.body?.rating ? req.body?.rating : skill[0].rating;
        const query = `UPDATE skills SET name='${req.body.skill}', description='${description}', rating=${rating} where id = ${skill[0].id}`
            const result = await executeQuery(query, []);
            res.status(200).send({
                status:200,
                status_message: "Skill Updated successfully."
            })
        }else{
            const description = req.body?.description ? req.body?.description : "";
            const rating = req.body?.rating ? req.body?.rating : "";
            const start_date = req.body?.start_date ? req.body?.start_date : "";
            console.log("==========", description && start_date && rating);
            
            if(description && start_date && rating){
                
                const query = 'CALL insert_skill(?, ?, ?, ?)';
                const values = [req.body.skill, req.body.description, req.body.start_date, req.body.rating];
                await executeQuery(query, values);
                res.status(201).send({
                    status:201,
                    status_message: "Skill added successfully."
                })
            }else{
                console.log("inside2");
                res.status(202).send({
                    status:202,
                    status_message: "Please add the Skill."
                })
            }
        }
       
    } catch (error) {
        console.error("Error Calling Updateskill:", err.message);
        res.status(500).send({ 
            status: 500,
            status_message: "Internal Server Error "+err.message 
        });
    }

}

module.exports = UpdateSkill