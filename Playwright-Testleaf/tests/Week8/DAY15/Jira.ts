import axios from "axios"


const endpoint="https://nadhiyark94.atlassian.net/rest/api/2/issue"


async function createIssue(summary: string, description: string) {



    const response = await axios.post(endpoint,
        {

            "fields": {
                "project": {
                    "key": "PJ"
                },
                "summary": summary,
                "description":description,
                "issuetype": {
                    "name": "Bug"
                }
            }
        },{
            headers:{
                "Content-Type":"application/json"
            },
            auth:{
                "username":"nadhiya.rk94@gmail.com",
                "password":"ATATT3xFfGF006zZha8Pdsqh3YCAhPzkSvLBNsUxC5aGXbXz4f1t4fv6VK9TKz4m933QWB_VpcyZYB4T7S1evVrzoZPbcptFleM_tZcXB4Czv70HfdVTjkFyFI3FL3D9RI5cArtsVn-tv_yArsQAzwzbYYRsAINhGr8dikHXJF0ZyOn602eDcNU=599EABF4"         }
        })


console.log(response);


}


createIssue("Bug created through PW API", "Creating bug using JIRA REST API")