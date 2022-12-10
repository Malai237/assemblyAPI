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


async function upload(fileName) {

    const data = await fs.readFileSync(`./${fileName}.mp3`);
    console.log(fileName)
    // Use the data returned from the fs.readFile() function
    const res = await assembly.post("/upload", data);

    console.log(res.data)
    let url = res.data.upload_url
    // Return the res.data value from the async function
    return url;

};

module.exports = {upload}