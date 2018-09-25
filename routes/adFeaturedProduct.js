const express = require('express')
const app = express()
var adFeaturedProduct = require('../controllers/adFeaturedProduct');

app.post('/api/admin/categoryid/:categoryid/subcategory/:subcatid/product/:productid/featured', adFeaturedProduct.makeProductFeatured);
app.post('/api/admin/subcategory/:subcatid/product/:productid/unfeatured', adFeaturedProduct.makeProductUnFeatured);
module.exports = app;