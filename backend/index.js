const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', routes);

app.get('/', (req, res) => {
  fetch('https://api-extern.systembolaget.se/product/v1/product', {
    headers: {
      'Ocp-Apim-Subscription-Key': '6f45beb889be414792a10d42eaa88252'
    }
  })
  .then(res => res.json())
  .then(data => {
    let arr = [];
    for(let item of data){
      if(item.Category === 'Öl'){
        arr.push({id: item.ProductId, brand: item.ProductNameBold, name: item.ProductNameThin})
      }
    }
    res.send(arr)
  })
})

const port = 3001;
app.listen(port, () => {
  console.log('app running on port ' + port);
})
