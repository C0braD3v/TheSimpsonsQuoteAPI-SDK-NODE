# Simpsons-Quotes
A NodeJs SDK for [The SimpsonsQuote API](https://github.com/JLuboff/TheSimpsonsQuoteAPI).

# Usage

`npm install @hpaulson/simpsons-quotes  --registry=https://npm.pkg.github.com/hpaulson`

```js
const simpsons = require('@hpaulson/simpsons-quotes')

simpsons.getQuotes("0")
    .then((q) => {
        console.log(q)
    }).catch((e) => {
        console.error(e)
    })

```

Methods:

```js
require('@hpaulson/simpsons-quotes')
    .getQuotes("#") // Promise<Array, QuoteObject>

QuoteObject = {
    quote // String<Quote>
    image // String<ImageLink>
    character // String<Character>
    characterDirection // String<left | right>
}
```
