const axios = require("axios");
require('dotenv').config();
assemblyAPI = process.env.assemblyAPI

const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: assemblyAPI,
        "content-type": "application/json",
    },
});


let audio_url = "https://cdn.assemblyai.com/upload/dbdbaba8-a92d-4736-a509-701955c8198a";

async function upload(audio_url){
    let res = await assembly.post("/transcript", {
        audio_url: audio_url,
        summarization: true,
        summary_model: "informative",
        summary_type: "bullets",
        speaker_labels: true,
        iab_categories: true,
    })

    let id = await res.data.id

    console.log(id)
    return id
}

upload(audio_url)
module.exports ={upload}
