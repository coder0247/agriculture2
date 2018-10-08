const express = require('express')
const app = express()
var adPageEditController = require('../controllers/adPageEditController');
app.get('/api/admin/page/:pageslug', adPageEditController.getPageContent);
app.post('/api/admin/page', adPageEditController.updatePageContent);

module.exports = app;