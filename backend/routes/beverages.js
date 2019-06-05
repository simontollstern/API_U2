const Beverage = require('../models/beverage.js');
const fetch = require('node-fetch');

const updateDatabase = () => {
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
    console.log(arr);
  })
}

updateDatabase();

setInterval(() => {
  updateDatabase();
}, 84000000);

const get = (req, res, next) => {
  res.send('hello :)')
}

module.exports = {
  get
}
