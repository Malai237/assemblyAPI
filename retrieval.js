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

let transcriptID = 'r7l7ro2wvs-eba6-4bca-acbb-ac34f12fab7f'


async function upload(transcriptID){
    let found = false
    let res =""
    while (!found){
        res = await assembly.get(`/transcript/${transcriptID}`);

        if (res.data.status == "completed"){
            found = true;
        }
        console.log(`Still searching data for ${transcriptID}`)
        await delay(5000);
    }
    console.log(Object.keys(res.data))
    console.log(`Summary: ${res.data.summary}`)
    console.log(`Transcription: ${res.data.text}`)

}


upload(transcriptID)
