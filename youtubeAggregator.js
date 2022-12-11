const axios = require("axios");
require('dotenv').config();
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const fs = require("fs");
let googleAPIKey = process.env.googleAPIKey
let channelId = 'UCtatfZMf-8EkIwASXM4ts0A'
let url = `https://www.googleapis.com/youtube/v3/search?key=${googleAPIKey}&channelId=${channelId}&part=snippet,id&order=date`


async function main(url){
    let res = await axios.get(url)
    // console.log (res.data.items[25])
    let itemsArr = res.data.items
    let youtube_ids = []
    // console.log(res.data.items)
    itemsArr.forEach(data => { youtube_ids.push(data.id.videoId)});
    let iter = 1
    while("nextPageToken" in res.data){

        res = await axios.get(url+`&pageToken=${res.data.nextPageToken}`)
        console.log (res.data.nextPageToken)
        let itemsArr = res.data.items
        // console.log(res.data.items)
        itemsArr.forEach(data => { youtube_ids.push(data.id.videoId)});
        console.log(`Iteration Number: ${iter}`)
        iter++;
        await delay(5000)
    }
    fs.writeFile("youtubeIDs.json", JSON.stringify(youtube_ids), 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log("JSON file has been saved.");
    });
    console.log(youtube_ids.length)
}

main(url)