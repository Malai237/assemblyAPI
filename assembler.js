const extract_details = require('./extractDetails.js');
const youtubeConvertor = require(`./youtubeConvertor`)
const convertLocalFile = require(`./convertLocalFile`)
const uploadData = require(`./uploadData`);
const retrieveData = require(`./retrieval`);

let url = "https://www.youtube.com/watch?v=iwYDfyCABAc&ab_channel=MrsJennii18"
// Use the imported module
async function main(url){
    let data = await extract_details.extract(url);
    // console.log(data)
    console.log(`Details extracted for ${data.title}, converting to a mp3 file now`)
    await youtubeConvertor.mp3Convertor(url,data.title)
    let cloudLink = await convertLocalFile.localToCloud(data.title)
    let transcriptID = await uploadData.upload(cloudLink);
    console.log(transcriptID)
    let results = await retrieveData.retrieve(transcriptID)
    console.log(results)
}

main(url)
module.exports= {main}