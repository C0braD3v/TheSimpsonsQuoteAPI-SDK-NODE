# TheSimpsonsQuoteAPI-SDK-GO
A NodeJs SDK for the SimpsonsQuote API by JLuboff. (https://github.com/JLuboff/TheSimpsonsQuoteAPI)

# Usage

`npm install the-simpsons-quote-api`

```js
const simpsons = require('the-simpsons-quote-api')
let data = simpsons.getQuotes("0")
console.log(data)
```

Data methods:

```
.quote // The random quote that was fetched
.image // The image of the character who said the quote
.character // The character who said the quote
.characterDirection // The direction the character was facing
```
