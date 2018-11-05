const express = require('express')
const app = express()
var categoryController = require('../controllers/categoryController');
app.get('/api/productlistbycat/:id', categoryController.productListByCat);
app.post('/api/getProductListBySubCat', categoryController.getProductListBySubCat);
app.post('/api/productlist', categoryController.productList);

module.exports = app;