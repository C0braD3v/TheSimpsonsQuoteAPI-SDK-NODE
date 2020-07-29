const simpsons = require('@hpaulson/simpsons-quotes')

simpsons.getQuotes("0")
    .then((q) => {
        console.log(q)
    }).catch((e) => {
        console.error(e)
    })
