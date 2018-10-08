const express = require('express')
const app = express()
var adBestSellerController = require('../controllers/adBestSellerController');

app.post('/api/admin/product/:productid/bestseller', adBestSellerController.makeProductBestSeller);
app.post('/api/admin/product/:productid/notbestseller', adBestSellerController.makeProductNotBestSeller);
// app.get('/api/admin/product/bestseller', adBestSellerController.getProductBestSeller);
module.exports = app;