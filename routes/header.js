const express = require('express')
const app = express()
var headerController = require('../controllers/headerController');
app.get('/api/catlist', headerController.categoryList);
app.get('/api/category/:catid/subcatlist', headerController.subCategoryList);
app.get('/api/regionlist', headerController.regionList);
app.get('/api/auth', headerController.auth);
module.exports = app;