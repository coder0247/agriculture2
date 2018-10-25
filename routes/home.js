const express = require('express')
const app = express()
var homeController = require('../controllers/homeController');
app.get('/api/featuredlist', homeController.featured);
app.get('/api/bestselllist/:limit', homeController.bestSellByLimit);
app.get('/api/onsalelist/:limit', homeController.onSaleByLimit);
app.get('/api/mostviewed/:limit', homeController.mostViewedByLimit);
app.get('/api/newarrival/:limit', homeController.newArrivalByLimit);
app.get('/api/page/:pageslug', homeController.getPageContent);
// test
// app.get('/api/category1/:catid/subcatlist', homeController.subCategoryList);
module.exports = app;