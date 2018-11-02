const express = require('express')
const app = express()
const mid = require('../middleware');
var singleProductController = require('../controllers/singleProductController');
// app.get('/api/search/subcategory/:subCatId/region/:regionId', singleProductController.updateViewedStatus);
app.get('/api/getsellerinfo/:productid', mid.sessionChecker, singleProductController.getSellerInfo);
app.get('/api/product/:id', mid.sessionChecker, singleProductController.productDetails);
app.post('/api/postmsg', singleProductController.postMsg);
app.get('/api/reasonlist', singleProductController.reportReason);
app.get('/api/intlcodes',singleProductController.intlcodelist);
app.post('/api/reportad', singleProductController.reportad);
module.exports = app;