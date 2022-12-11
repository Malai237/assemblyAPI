const singleTranscription = require(`./assembler.js`)
// const youtubeLinks = require(`./youtubeIDs.json`)
let i = 0;
let int =5;
let end = 0
let youtubeIDs =["UHSkjro-VbE",
                "XuHfzVkZGBU",
                "vfDL2nmyaL8",
                "lnufceCxwG0",
                "27Z1svBtl1c",
                "htCtph_yLOw",
                "3MRWBahy02U",
                "F7XGddoTxrA",
                "i5t4PlGvYmI"]

let dashBoardCollection = "showcaseData"
let collectionSlug = "llm"


async function concurrentFinder(youtubeIDs,dashBoardCollection,collectionSlug){
    console.log(`Length of Document: ${youtubeIDs.length}`)
    const nonNullValues = youtubeIDs.filter(element => {
        return element !== null;
    });
    while (i < nonNullValues.length){

        if (int+i < nonNullValues.length ){
        end = int+i
        } else {
        end = nonNullValues.length
        }
        let partialBlockNums = nonNullValues.slice(i,end)
        console.log(`Length of partial blocks: ${partialBlockNums.length}`)
        await Promise.all(partialBlockNums.map(async(youtubeID)=>{
            try{
                // console.log(url)
                await singleTranscription.main(youtubeID,dashBoardCollection,collectionSlug) //Takes in the videoID
                // await singleTranscription.main(url,dashBoardCollection,collectionSlug) //takes in the whole url as the argument
            } catch (e){
                console.log(`Error: ${e} for block code: ${youtubeID}`)
            }
        }))
    i+=int
    }
    process.exit(0)
}

concurrentFinder(youtubeIDs,dashBoardCollection,collectionSlug)