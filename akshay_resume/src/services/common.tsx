console.log("----inside service");

export const getSkills = async (skill: string, token: string) => {
    try {
        let reqBody = {}
        if (skill) {
            reqBody = {
                "skill": skill
            }
        }

        const res = await fetch('http://localhost:8080/api/auth/getSkill', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJha2tpa3I0OTRAZ21haWwuY29tIiwiaWF0IjoxNzUzNzE0MTQ4LCJleHAiOjE3NTM3MTc3NDh9.yqbbj5RctXbmE7NWLYJJZv-zTxDD6kTNYlRSAMLuyQk'
            },
            body: JSON.stringify(reqBody)
        })
        console.log("==res==", res);

        if (!res.ok) {
            return {
                status: 201,
                status_message: "Failed to fetch skills"
            }
        }
        const data = await res.json();
        if (data.status == 200) {
            console.log("-----get data ", data)
            return {
                status: 200,
                status_message: "Skills fetched successfully",
                data: data.data
            }
        } else {
            return {
                status: 201,
                status_message: "Failed to fetch skills"
            }
        }

    } catch (error) {
        return {
            status: 500,
            status_message: "Internal server error " + error
        }
    }
}

