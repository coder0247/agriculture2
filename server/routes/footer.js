const express = require('express')
const app = express()
var footerController = require('../controllers/footerController');
app.get('/api/newsletterSubs/:email',  footerController.newsletterSubs);
app.post('/api/subscribe', footerController.subscribe);
module.exports = app;