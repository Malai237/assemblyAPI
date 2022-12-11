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


async function retrieveSentences(transcriptID){
    let found = false
    let res =""
    while (!found){
        res = await assembly.get(`/transcript/${transcriptID}/sentences`);

        if (res.status == 200){
            found = true;
        } else {
            console.log(`Error for ${transcriptID}`)
            // await delay(10000);
        }

    }

    let sentences = res.data.sentences
    let timedTranscription =""
    await sentences.forEach(sentence => { timedTranscription += appendTimestamp(sentence) });
    // console.log(timedTranscription)
    return {sentences,timedTranscription}

}

function appendTimestamp(sentenceArr){
    let value = `<<${sentenceArr.start}>>${sentenceArr.text}<<${sentenceArr.end}>>`
    return value;
}

// retrieveSentences('r7iejym7tg-c579-4bc1-9888-e281393160ea')

module.exports = {retrieveSentences}
