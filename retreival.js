const axios = require("axios");
require('dotenv').config();
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const assemblyAPI = process.env.assemblyAPI

const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: assemblyAPI,
        "content-type": "application/json",
    },
});

let transcriptID = 'r7lk0gib8c-45da-4b9a-a59a-6c18f23ad6c6'


async function upload(transcriptID){
    let found = false
    let res =""
    while (!found){
        res = await assembly.get(`/transcript/${transcriptID}`);
        console.log(`Still searching data for ${transcriptID}`)
        if (res.data.status == "completed"){
            found = true;
        }
        await delay(5000);
    }
    console.log(res.data.summary)

}


upload(transcriptID)
