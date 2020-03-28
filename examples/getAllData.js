const simpsons = require('simpsons-quote-api')

simpsons.getQuotes("0")
    .then((q) => {
        console.log(q)
    }).catch((e) => {
        console.error(e)
    })
