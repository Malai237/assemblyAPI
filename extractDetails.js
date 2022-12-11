const ytdl = require('ytdl-core');
const youtubeVideoUrl = "https://www.youtube.com/watch?v=iwYDfyCABAc&ab_channel=MrsJennii18";

// console.log("Hello")

async function camelCaseConvertor(myString){
    // Split the string into an array of words
    const words = myString.split(' ');

    // Convert the first word to lower case
    words[0] = words[0].toLowerCase();

    // Convert the remaining words to camel case
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words back into a string
    const camelCaseString = words.join('');
    return camelCaseString.replace("/", "");
}

async function extract(url){
    let info = await ytdl.getInfo(url)
    let title = await camelCaseConvertor(info.videoDetails.title)
    let description = info.videoDetails.description
    let lengthSecs = parseInt(info.videoDetails.lengthSeconds)
    let viewCount = parseInt(info.videoDetails.viewCount)
    let publishDate = new Date(info.videoDetails.publishDate)
    let thumbnailLink = info.videoDetails.thumbnails
    let ownerChannelName = info.videoDetails.ownerChannelName
    let likes = parseInt(info.videoDetails.likes)
    // console.log(`Video Details \ntitle: ${title}\ndescription: ${description}\nlength in seconds: ${lengthSecs}\nView Count: ${viewCount}\nPublish Date: ${publishDate}\nThumbnails: ${thumbnailLink}\nOwner Channel: ${ownerChannelName}\nLike Count: ${likes}`)
    // console.log(Object.keys(info.videoDetails))
    return {title,description,lengthSecs,viewCount,publishDate,thumbnailLink,ownerChannelName,likes}

}


// extract(youtubeVideoUrl)
module.exports= {extract}