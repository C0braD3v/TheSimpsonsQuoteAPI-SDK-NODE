const simpsons = require('simpsons-quote-api')

simpsons.getQuotes("0")
    .then((q) => {
        console.log(q[0].quote)
    }).catch((e) => {
        console.error(e)
    })
