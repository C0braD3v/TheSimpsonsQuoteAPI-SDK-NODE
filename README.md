# TheSimpsonsQuoteAPI-SDK-NODE
A NodeJs SDK for [The SimpsonsQuote API by JLuboff](https://github.com/JLuboff/TheSimpsonsQuoteAPI).

# Usage

`npm install simpsons-quote-api`

```js
const simpsons = require('simpsons-quote-api')

simpsons.getQuotes("0")
    .then((q) => {
        console.log(q)
    }).catch((e) => {
        console.error(e)
    })

```

Data methods:

```
.getQuotes("#") // Returns promise<array, fullQuoteObject>

fullQuoteObject Methods:
.quote // Returns string<quote>
.image // Returns string<image link of who said quote>
.character // Returns string<charicter who said quote>
.characterDirection // Returns string<direction charictar is facing in image>
```
