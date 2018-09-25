const express = require('express')
const app = express()
var homeController = require('../controllers/homeController');
app.get('/api/featuredlist', homeController.featured);
app.get('/api/bestselllist/:limit', homeController.bestSellByLimit);
app.get('/api/mostviewed/:limit', homeController.mostViewedByLimit);
app.get('/api/newarrival/:limit', homeController.newArrivalByLimit);
module.exports = app;