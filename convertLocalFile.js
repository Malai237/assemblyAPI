const axios = require("axios");
const fs = require("fs");
require('dotenv').config();
assemblyAPI = process.env.assemblyAPI

const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: assemblyAPI,
        "content-type": "application/json",
        "transfer-encoding": "chunked",
    },
});
// const file = "./joeRogan&DerekAboutDavidGoggins.mp3";
const file = "areYouReady";

// async function localToCloud(fileName){
//     // Use the await keyword to pause the execution of the async function until the fs.readFile() function returns a value
//     const data = await fs.readFile(`./${fileName}.mp3`, (err, data) => {
//         if (err) return console.error(err);
//         else return data;
//       });
//       res = await assembly.post("/upload", data)
//       console.log(res.data.upload_url)
//       return res.data.upload_url
// }

  
// module.exports = {localToCloud}
// const file = "PATH-TO-YOUR-FILE";
// fs.readFile(`./${fileName}.mp3`, (err, data) => {
//     if (err) return console.error(err);

//     assembly
//         .post("/upload", data)
//         .then((res) => console.log(res.data))
//         .catch((err) => console.error(err));
// });

async function upload(fileName) {

    const data = await fs.readFileSync(`./${fileName}.mp3`);
    console.log(fileName)
    // Use the data returned from the fs.readFile() function
    const res = await assembly.post("/upload", data);
    // let url = res.data.url
    // Return the res.data value from the async function
    return url;

  };
  
  // Call the upload() function and print the return value
  console.log(`The url is: ${upload(file)}`);
  console.log("Done")