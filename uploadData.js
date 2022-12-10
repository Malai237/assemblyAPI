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


let audio_url = "https://www.youtube.com/watch?v=iwYDfyCABAc&ab_channel=MrsJennii18";

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
}

upload(audio_url)
