const express = require('express')
const app = express()
var headerController = require('../controllers/headerController');
app.get('/api/catlist', headerController.categoryList);
app.get('/api/catsubcatlist', headerController.catsubcatList);

app.get('/api/category/:catid/subcatlist', headerController.subCategoryList);
app.get('/api/regionlist', headerController.regionList);
app.get('/api/auth', headerController.auth);
app.get('/api/allsubcatlist/:catid', headerController.AllSubcatList);
module.exports = app;