const executeQuery = require('./utils/dbconnection')
async function GetSkills(skillName) {
    if (!params) {
        return {
            status: 402,
            status_message: "BAD request!!!"
        };
    }
    
  try {
    let selectQuery =`SELECT * from skills where name = ?` 
    const rows = await executeQuery(selectQuery, [skillName]);
    return rows;
  } catch (err) {
    console.error("Error:", err.message);
    return []; // return empty array on failure instead of undefined
  }
}


module.exports = GetSkills;