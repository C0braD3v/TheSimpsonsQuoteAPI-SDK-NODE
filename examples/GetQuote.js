const simpsons = require('simpsons-quote-api')
async function logData() {
let data = await simpsons.getQuotes("0").catch((e) => {console.error(e)})
console.log(data[0].quote)
}
logData()
