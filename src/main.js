const request = require('request');

function getQuotes (count) {
    
    request('https://thesimpsonsquoteapi.glitch.me/quotes?count=' + count, function (err, res, body) {
        if (!err && res.statusCode == 200) {
          var info = JSON.parse(body)
          return info
        }
        else {
            console.err(err)
        }
    })
}
module.exports = getQuotes;
