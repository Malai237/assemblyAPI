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


let audio_url = "https://www.youtube.com/watch?v=Ji1DKxzJ-js&ab_channel=AssemblyAI";

async function upload(audio_url){
    // console.log(`URL received by uploadData.js code: ${audio_url}`)
    let res = await assembly.post("/transcript", {
        audio_url: audio_url,
        summarization: true,
        summary_model: "informative",
        summary_type: "bullets",
        speaker_labels: true,
        iab_categories: true,
    })

    let id = await res.data.id

    // console.log(id)
    return id
}

// upload("https://rr3---sn-ab5l6nrd.googlevideo.com/videoplayback?expire=1670800729&ei=-RCWY_H2EJuP_9EPqZyV-As&ip=54.82.91.83&id=o-AP_rDuyEPT9JpHZRp_PZprH-bGqrsf1mWRkv3xBJ02Zo&itag=140&source=youtube&requiressl=yes&mh=L8&mm=31%2C29&mn=sn-ab5l6nrd%2Csn-ab5sznld&ms=au%2Crdu&mv=u&mvi=3&pl=24&vprv=1&mime=audio%2Fmp4&gir=yes&clen=58431021&otfp=1&dur=3610.400&lmt=1668380301425433&mt=1670778631&fvip=2&keepalive=yes&fexp=24001373%2C24007246&c=ANDROID&txp=6211224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cotfp%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAI2ZqWtXR-6oLardh3dE45cJlsvqug56fwkzePMXhLquAiEA4U3Ttsjtc6H0ssw-nx-NaztpAa8k1j1BJHbs2cinFiw%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgPvUqtAZxy80SPyjnnKdWuNSZu2XAJimU2HjcURGXHaYCIHiCBuZ2JlC26rLBAWVMl3aYAEooC-cq8I4ZwlNUrNL7&title=Product%2C+Relationships+and+Teamwork+%7C+Chiedza+Muguti+%7C+Beyond+Coding+Podcast+%2379")
module.exports ={upload}
