module.exports = getQuotes
const request = require('request');

function getQuotes (count) {
    
    request('https://thesimpsonsquoteapi.glitch.me/quotes?count=' + count, function (err, res, body) {
        if (!err && res.statusCode == 200) {
          var info = JSON.parse(body)
          console.log(info)
        }
        else {
            console.err(err)
        }
    })
}
