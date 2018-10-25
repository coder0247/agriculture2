const express = require('express')
const app = express()
var homeproductController = require('../controllers/homeproductController');
app.get('/api/homeprodcatwisestatus/:catid/:newstatus', homeproductController.homeprodcatwisestatus);
app.get('/api/homeprodsubcatwisestatus/:subcatid/:newstatus', homeproductController.homeprodsubcatwisestatus);
module.exports = app;