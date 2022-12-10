const ytdl = require('ytdl-core');
const youtubeVideoUrl = "https://www.youtube.com/watch?v=iwYDfyCABAc&ab_channel=MrsJennii18";

// console.log("Hello")

async function extract(url){
    let info = await ytdl.getInfo(youtubeVideoUrl)
    let title = info.videoDetails.title
    let description = info.videoDetails.description
    let lengthSecs = info.videoDetails.lengthSeconds
    let viewCount = info.videoDetails.viewCount
    let publishDate = info.videoDetails.publishDate
    let thumbnailLink = info.videoDetails.thumbnails
    let ownerChannelName = info.videoDetails.ownerChannelName
    let likes = info.videoDetails.likes
    console.log(`Video Details \ntitle: ${title}\ndescription: ${description}\nlength in seconds: ${lengthSecs}\nView Count: ${viewCount}
\nPublish Date: ${publishDate}\nThumbnails: ${thumbnailLink}\nOwner Channel: ${ownerChannelName}\nLike Count: ${likes}`)
    // console.log(Object.keys(info.videoDetails))


}
// ytdl.getInfo(youtubeVideoUrl, (err, info) => {
//   if (err) throw err;

//   // Print the video title
//     console.log(info.videoDetails.title);

//   // Print the video thumbnail URL
//   console.log(info.videoDetails.thumbnail.thumbnails[0].url);
// });

extract(youtubeVideoUrl)