let string = "Sokyo the president of South Korea used deep fake"

let timedTranscription = "<<250>>Yoon.<<426>><<458>>Sokyo the president of South Korea used deep fake video messages to help his campaign.<<5466>><<5578>>Yoon used a computer generated version of himself to answer questions from voters.<<9882>><<9946>>This is not the first time deep fakes are used in politics and very likely not the last.<<14798>><<14884>>Previously a similar technique was used to alter the video message recorded by the Indian politician Manoeuch Tivari.<<21114>><<21162>>His video was altered to be in other languages than the one it was recorded in.<<25318>><<25444>>Deep fakes, although came to our lives in the form of pranks and funny, apps are starting to be used in ways that have an effect on real life.<<32630>><<32700>>In June's case, viewers were made aware that the video they're watching was computer generated, but it is hard to say whether they would have realized if they weren't informed of this.<<41990>><<42060>>Chances are the majority of them would not have realized this because deep fakes can now be made to be super realistic and that's why deepfakes are still a very controversial topic in the world of AI.<<52074>><<52122>>But what do you think about the fix being used with real life implications?<<55370>><<55530>>Leave your thoughts in the comments.<<56650>>"

function extractStartTime(str,timedTranscription){
    // Extract the first setence from the String
    const first = str.split('.')[0]

    var regexObj = new RegExp(`<<(\\d+)>>${first}`)
    let match = timedTranscription.match(regexObj)
    console.log(match[1]);
}

extractStartTime(string,timedTranscription)