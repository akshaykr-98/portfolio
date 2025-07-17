const executeQuery = require('./utils/dbconnection');

async function UpdateSkill(params,id){
    if (!params || !id) {
        return {
            status: 402,
            status_message: "BAD request!!!"
        };
    }
    const query = `UPDATE skills SET name='${params.skill}', description='${params.description}', rating=${params.rating} where id = ${id}`
    try {
        await executeQuery(query, []);
        return {
            status: 200,
            status_message: "Skill Updated successfully."
        };
    } catch (error) {
        console.error("Error Calling Updateskill:", err.message);
        return {
            status: 500,
            status_message: "Internal Server Error while inserting skill."
        };
    }

}

module.exports = UpdateSkill