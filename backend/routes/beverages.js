const Beverage = require('../models/beverage.js');
const fetch = require('node-fetch');

const updateDatabase = () => {
  fetch('https://api-extern.systembolaget.se/product/v1/product', {
    headers: {
      'Ocp-Apim-Subscription-Key': '6f45beb889be414792a10d42eaa88252'
    }
  })
  .then(res => res.json())
  .then(beverages => {
    for(let beverage of beverages){
      if(beverage.Category === 'Öl'){
        Beverage.findOneAndUpdate({id: beverage.ProductId}, {
          id: beverage.ProductId,
          productNumber: beverage.ProductNumber,
          nameBold: beverage.ProductNameBold,
          nameThin: beverage.ProductNameThin,
          description: beverage.BeverageDescriptionShort,
          usage: beverage.Usage,
          taste: beverage.Taste
        }, {new: true, upsert: true}).exec();
      }
    }
  })
}

updateDatabase();

setInterval(() => {
  updateDatabase();
}, 86400000);

const get = (req, res, next) => {
  Beverage.find()
    .then(beverages => res.send(beverages))
    .catch(error => next(error))
}

module.exports = {
  get
}
