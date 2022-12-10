const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');

// Replace with the URL of the YouTube video you want to convert.
// const url = "https://www.youtube.com/watch?v=iwYDfyCABAc&ab_channel=MrsJennii18";

// Replace with the path and filename where you want to save the MP3 file.
const filePath = './video.mp3';

// Create a readable stream from the YouTube video.



async function mp3Convertor(url, fileName){
    // Use ffmpeg to convert the video stream to an MP3 file.

    const stream = ytdl(url, { filter: 'audioonly' });
    await ffmpeg(stream).output(`./${fileName}.mp3`).run()
}

// mp3Convertor( "https://www.youtube.com/watch?v=IKSsO4VjP7k&ab_channel=JREHouse","KRE")

module.exports = {mp3Convertor}