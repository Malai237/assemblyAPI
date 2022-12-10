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
const file = "./video.mp3";
fs.readFile(file, (err, data) => {
    if (err) return console.error(err);

    assembly
        .post("/upload", data)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
});