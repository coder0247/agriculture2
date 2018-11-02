const express = require('express')
const app = express()
var searchController = require('../controllers/searchController');
app.get('/api/search/subcategory/:subCatId', searchController.searchResult);
module.exports = app;