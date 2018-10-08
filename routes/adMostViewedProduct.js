const express = require('express')
const app = express()
var adMostViewedController = require('../controllers/adMostViewedController');

app.post('/api/admin/product/:productid/mostviewed', adMostViewedController.makeProductMostviewed);
app.post('/api/admin/product/:productid/notmostviewed', adMostViewedController.makeProductNotMostviewed);

module.exports = app;