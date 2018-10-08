const express = require('express')
const app = express()
var adNewArrivalsController = require('../controllers/adNewArrivalsController');

app.post('/api/admin/product/:productid/newarrival', adNewArrivalsController.makeProductNewArrival);
app.post('/api/admin/product/:productid/notnewarrival', adNewArrivalsController.makeProductNotNewArrival);

module.exports = app;
