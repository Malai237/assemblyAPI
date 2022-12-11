const axios = require("axios");
require('dotenv').config();
const rapidAPIKey = process.env.RapidAPI_Key
const rapidAPIHost = process.env.RapidAPI_Host

let videoID = "i5t4PlGvYmI"
console.log(rapidAPIKey)
async function convertor(videoID){
    const options = {
        method: 'GET',
        url: 'https://youtube-video-info.p.rapidapi.com/video_formats',
        params: {video: videoID},
        headers: {
            'X-RapidAPI-Key': rapidAPIKey,
            'X-RapidAPI-Host':rapidAPIHost
        }
    };

    let res = await axios.request(options)

    // console.log(res.data)
    return res.data.AllFormats[1].Link
      
    // axios.request(options).then(function (response) {
    //     // console.log(response.data);
    //     console.log(response.data.AllFormats[1].Link)
    //     return response.data.AllFormats[1].Link
    // }).catch(function (error) {
    //     console.error(error);
    // });
}

// convertor(videoID)

module.exports = {convertor}