const executeQuery = require('./utils/dbconnection');

async function AddSkill(params) {
    if (!params) {
        return {
            status: 402,
            status_message: "BAD request!!!"
        };
    }
    const query = 'CALL insert_skill(?, ?, ?, ?)';
    const values = [params.skill, params.description, params.start_date, params.rating];

    try {
        await executeQuery(query, values);
        return {
            status: 201,
            status_message: "Skill added successfully."
        };
    } catch (err) {
        console.error("Error Calling AddSkill:", err.message);
        return {
            status: 500,
            status_message: "Internal Server Error while inserting skill."
        };
    }
}

module.exports = AddSkill;
