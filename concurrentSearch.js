const singleTranscription = require(`./assembler.js`)
let i = 0;
let int =5;
let end = 0
let youtubeLinks =["https://www.youtube.com/watch?v=qPHVIIXu0hM&ab_channel=AssemblyAI",
                "https://www.youtube.com/watch?v=Ha-6cL2gUrY&ab_channel=AssemblyAI",
                "https://www.youtube.com/watch?v=fOLdyUaaPrY&ab_channel=AssemblyAI",
                "https://www.youtube.com/watch?v=tb_IG0lF27Y&ab_channel=AssemblyAI",
                "https://www.youtube.com/watch?v=Oqre8AW8Sig&ab_channel=AssemblyAI",
                "https://www.youtube.com/watch?v=dccdadl90vs&ab_channel=AssemblyAI"]



async function concurrentFinder(youtubeLinks){
    while (i < youtubeLinks.length){

        if (int+i < youtubeLinks.length ){
        end = int+i
        } else {
        end = youtubeLinks.length
        }
        let partialBlockNums = youtubeLinks.slice(i,end)
        console.log(`Length of partial blocks: ${partialBlockNums.length}`)
        let innerRes =  await Promise.all(partialBlockNums.map(async(url)=>{
            try{
                // console.log(url)
                await singleTranscription.main(url)
            } catch (e){
                console.log(`Error: ${e} for block code: ${endTime}`)
            }
        }))
    i+=int
    }
    process.exit(0)
}

concurrentFinder(youtubeLinks)