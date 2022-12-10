const extract_details = require('./extractDetails.js');
const youtubeConvertor = require(`./youtubeConvertor`)

let url = "https://www.youtube.com/watch?v=IKSsO4VjP7k&ab_channel=JREHouse"
// Use the imported module
async function main(url){
    let data = await extract_details.extract(url);
    // console.log(data)
    console.log(`Details extracted for ${data.title}, converting to a mp3 file now`)
    await youtubeConvertor.mp3Convertor(url,data.title)
}

main(url)
module.exports= {main}