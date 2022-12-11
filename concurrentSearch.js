const singleTranscription = require(`./assembler.js`)
const youtubeLinks = require(`./partialYoutubeVideoIDs.json`)
let i = 0;
let int =5;
let end = 0
// let youtubeLinks =["https://www.youtube.com/watch?v=qPHVIIXu0hM&ab_channel=AssemblyAI",
//                 "https://www.youtube.com/watch?v=Ha-6cL2gUrY&ab_channel=AssemblyAI",
//                 "https://www.youtube.com/watch?v=fOLdyUaaPrY&ab_channel=AssemblyAI",
//                 "https://www.youtube.com/watch?v=tb_IG0lF27Y&ab_channel=AssemblyAI",
//                 "https://www.youtube.com/watch?v=Oqre8AW8Sig&ab_channel=AssemblyAI",
//                 "https://www.youtube.com/watch?v=dccdadl90vs&ab_channel=AssemblyAI"]

let dashBoardCollection = "assemblyAIVideos"

async function concurrentFinder(youtubeLinks,dashBoardCollection){
    console.log(`Length of Document: ${youtubeLinks.length}`)

    while (i < youtubeLinks.length){

        if (int+i < youtubeLinks.length ){
        end = int+i
        } else {
        end = youtubeLinks.length
        }
        let partialBlockNums = youtubeLinks.slice(i,end)
        console.log(`Length of partial blocks: ${partialBlockNums.length}`)
        await Promise.all(partialBlockNums.map(async(url)=>{
            try{
                // console.log(url)
                await singleTranscription.main(`https://www.youtube.com/watch?v=${url}&ab_channel=AssemblyAI`,dashBoardCollection)
            } catch (e){
                console.log(`Error: ${e} for block code: ${url}`)
            }
        }))
    i+=int
    }
    process.exit(0)
}

concurrentFinder(youtubeLinks,dashBoardCollection)