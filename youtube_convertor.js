const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');

// Replace with the URL of the YouTube video you want to convert.
// const url = "https://www.youtube.com/watch?v=iwYDfyCABAc&ab_channel=MrsJennii18";

// Replace with the path and filename where you want to save the MP3 file.
const filePath = './video.mp3';

// Create a readable stream from the YouTube video.
const stream = ytdl(url, { filter: 'audioonly' });

// Use ffmpeg to convert the video stream to an MP3 file.
ffmpeg(stream)
  .output(filePath)
  .on('error', function(err) {
    // Handle error
    console.log(err);
  })
  .on('progress', function(progress) {
    // Log progress, if you want
    console.log(progress);
  })
  .on('end', function() {
    // Conversion is complete
    console.log('Finished converting YouTube video to MP3');
  })
  .run();


module.export()