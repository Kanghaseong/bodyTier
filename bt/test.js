const fetch = require("node-fetch");
const express = require("express");

const app = express();
const port = 3000;

let coinName, coinPrice;


app.get('/', (req, res) => {
  res.send('Hello World!')
  fetch('https://api.coinpaprika.com/v1/tickers/btc-bitcoin?quotes=KRW')
  .then(response => response.json())
  .then(response => {
    coinPrice = response.quotes.KRW.price;
    coinName = response.name;
    console.log(coinName)
    console.log(coinPrice)
    console.log(response)
  }) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


 

