const file = require(`./youtubeIDs.json`)
const youtubeLinks = require(`./partialYoutubeVideoIDs.json`)

const results = youtubeLinks.filter(element => {
    return element !== null;
  });

console.log(results.length)