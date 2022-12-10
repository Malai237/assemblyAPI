const extract_details = require('./extractDetails.js');
const youtubeConvertor = require(`./youtubeConvertor`)
const convertLocalFile = require(`./convertLocalFile`)
const uploadData = require(`./uploadData`);
const retrieveData = require(`./retrieval`);
const retrieveSentences = require(`./retrievalSentences`)
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))


let url = "https://www.youtube.com/watch?v=Ji1DKxzJ-js&ab_channel=AssemblyAI"
// Use the imported module
async function main(url){
    let data = await extract_details.extract(url);
    // console.log(url)
    console.log(`Details extracted for ${data.title}, converting to a mp3 file now`)
    let mp3 = await youtubeConvertor.mp3Convertor(url,data.title)
    await delay(5000); //Takes time to be uploaded into local
    let cloudLink = await convertLocalFile.localToCloud(data.title)
    let transcriptID = await uploadData.upload(cloudLink);
    // console.log(transcriptID)
    let results = await retrieveData.retrieve(transcriptID)
    // console.log(results)
    let setences = await retrieveSentences.retrieveSentences(transcriptID)
    let fullData = {...data,...results,...setences}
    // console.log(JSON.stringify(fullData,null,5))
    console.log(Object.keys(fullData))
}

main(url)
module.exports= {main}