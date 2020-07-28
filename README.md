# Simpsons-Quotes
A NodeJs SDK for [The SimpsonsQuote API](https://github.com/JLuboff/TheSimpsonsQuoteAPI).

# Usage

`npm install @hpaulson/simpsons-quotes`

```js
const simpsons = require('simpsons-quote-api')

simpsons.getQuotes("0")
    .then((q) => {
        console.log(q)
    }).catch((e) => {
        console.error(e)
    })

```

Methods:

```js
require('simpsons-quote-api')
    .getQuotes("#") // Promise<Array, QuoteObject>

QuoteObject = {
    quote // String<Quote>
    image // String<ImageLink>
    character // String<Character>
    characterDirection // String<left | right>
}
```
