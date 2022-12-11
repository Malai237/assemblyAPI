let youtubeLink = "https://www.youtube.com/watch?v=ql1oNrmMr_U&ab_channel=AssemblyAI//"

function extractID(youtubeLink){
    var regexObj = new RegExp(`v=(.*)&`)
    let match = youtubeLink.match(regexObj)
    // console.log(match[1]);
    return match[1]
}

extractID(youtubeLink)