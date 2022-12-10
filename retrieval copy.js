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

// let transcriptID = 'r7l7ro2wvs-eba6-4bca-acbb-ac34f12fab7f'


async function retrieve(transcriptID){
    let found = false
    let res =""
    while (!found){
        res = await assembly.get(`/transcript/${transcriptID}`);
        console.log(res.data.status)

        if (res.data.status == "completed"){
            found = true;
        } else {
            console.log(`Still searching data for ${transcriptID}`)
            await delay(10000);
        }

    }
    // console.log(Object.keys(res.data))
    // console.log(`Summary: ${res.data.summary}`)
    // console.log(`Transcription: ${res.data.text}`)
    let summary = res.data.summary
    let transcription = res.data.text
    return {summary,transcription}

}

// retrieve('r7iejym7tg-c579-4bc1-9888-e281393160ea')

module.exports = {retrieve}
