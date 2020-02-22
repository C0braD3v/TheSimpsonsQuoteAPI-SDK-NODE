# TheSimpsonsQuoteAPI-SDK-NODE
A NodeJs SDK for the SimpsonsQuote API by JLuboff. (https://github.com/JLuboff/TheSimpsonsQuoteAPI)

# Usage

`npm install simpsons-quote-api`

```js
const simpsons = require('simpsons-quote-api')
async function logData() {
let data = await simpsons.getQuotes("0").catch((e) => {console.error(e)})
console.log(data)
}
logData()


```

Data methods:

```
.quote // The random quote that was fetched
.image // The image of the character who said the quote
.character // The character who said the quote
.characterDirection // The direction the character was facing
```
