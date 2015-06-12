'use strict';

exports = module.exports = function(app) {

  var products = [
    {id: 'item1', name: 'Item 1', price: 150},
    {id: 'item2', name: 'Item 2', price: 2324},
    {id: 'item3', name: 'Item 3', price: 92},
    {id: 'item4', name: 'Item 4', price: 430}
  ];

  app.get('/api/product', function(req, res) {
    res.json(products);
  });
};
