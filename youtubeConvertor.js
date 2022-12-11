const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');

// Replace with the URL of the YouTube video you want to convert.
// const url = "https://www.youtube.com/watch?v=iwYDfyCABAc&ab_channel=MrsJennii18";

// Replace with the path and filename where you want to save the MP3 file.
const filePath = './video.mp3';

// Create a readable stream from the YouTube video.



async function mp3Convertor(url, fileName){
    // Use ffmpeg to convert the video stream to an MP3 file.

    const stream = await ytdl(url, { filter: 'audioonly' });
    try{
        await ffmpeg(stream).output(`./${fileName}.mp3`).run()
        console.log("Done in youtube convertor code")
    }catch(e){
        console.log(`Problem with finding the file for ${fileName}`)
    }

}

// mp3Convertor( "https://www.youtube.com/watch?v=3MRWBahy02U","trial123")

module.exports = {mp3Convertor}