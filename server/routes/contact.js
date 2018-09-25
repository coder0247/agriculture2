const express = require('express')
const app = express()
var contactController = require('../controllers/contactController');
app.post('/api/contact',  contactController.contact);
module.exports = app;