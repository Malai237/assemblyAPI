const extract_details = require('./extractDetails.js');
const youtubeConvertor = require(`./youtubeConvertor`)
const convertLocalFile = require(`./convertLocalFile`)
const uploadData = require(`./uploadData`);
const fs = require("fs");
// require('dotenv').config();
const retrieveData = require(`./retrieval`);
const retrieveSentences = require(`./retrievalSentences`)
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const MongoClient = require('mongodb').MongoClient;

const MONGODB_USERNAME = process.env.MONGODB_USERNAME
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD
let DATABASE_NAME = process.env.DATABASE_NAME //'devEnvironment' // //'Need to change to prodEnvironment'

const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.mqxysnq.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true });

const database = client.db(DATABASE_NAME);
let dashBoardCollection = "testSet"

let url = "https://www.youtube.com/watch?v=Ji1DKxzJ-js&ab_channel=AssemblyAI"
// Use the imported module
async function main(url){
    let data = await extract_details.extract(url);
    // console.log(url)
    console.log(`Details extracted for ${data.title}, converting to a mp3 file now`)
    let mp3 = await youtubeConvertor.mp3Convertor(url,data.title)
    await delay(5000); //Takes time to be uploaded into local
    let cloudLink = await convertLocalFile.localToCloud(data.title)
    let transcriptID = await uploadData.upload(cloudLink);
    // console.log(transcriptID)
    let results = await retrieveData.retrieve(transcriptID)
    // console.log(results)
    let setences = await retrieveSentences.retrieveSentences(transcriptID)
    let fullData = {...data,...results,...setences}
    //Outputing a JSON file
    // console.log(JSON.stringify(fullData,null,5))
    // console.log(Object.keys(fullData))
    // fs.writeFile("output.json", JSON.stringify(fullData), 'utf8', function (err) {
    //     if (err) {
    //         console.log("An error occured while writing JSON Object to File.");
    //         return console.log(err);
    //     }
     
    //     console.log("JSON file has been saved.");
    // });
    //Uploading data into mongoDB
    console.log("Uploading data into mongoDB")
    await client.connect();
    let collection = database.collection(dashBoardCollection)
    await collection.insertOne(fullData);
    // console.log("Process Complete. Ciao")
    console.log(`Process complete for ${data.title}`)
    // process.exit(0) //Remove this when you are doing concurrent transcription
}

// main(url)
module.exports= {main}