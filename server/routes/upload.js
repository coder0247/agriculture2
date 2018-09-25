const express = require('express')
const app = express()

var uploadController = require('../controllers/uploadController');
app.post('/api/upload', uploadController.uploadProductImage);

module.exports = app;