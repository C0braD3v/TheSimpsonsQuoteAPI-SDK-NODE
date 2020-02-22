exports.getQuotes = async (count) => {
        const got = require('got');
        try {
            const response = await got('https://thesimpsonsquoteapi.glitch.me/quotes?count=' + count);
            return JSON.parse(response.body);
        } catch (error) {
            return console.error(error.response.body);
        }
}
