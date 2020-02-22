const got = require('got');

exports.getQuotes = async (count) => {
        try {
            const response = await got('https://thesimpsonsquoteapi.glitch.me/quotes?count=' + count);
            return JSON.parse(response.body);
        } catch (error) {
            return console.error(error.response.body);
        }
}
