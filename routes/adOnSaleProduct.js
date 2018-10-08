const express = require('express')
const app = express()
var adOnSaleController = require('../controllers/adOnSaleController');

app.post('/api/admin/product/:productid/onsale', adOnSaleController.makeProductOnSale);
app.post('/api/admin/product/:productid/notonsale', adOnSaleController.makeProductNotOnSale);

module.exports = app;