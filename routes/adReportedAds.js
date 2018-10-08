const express = require('express')
const app = express()
const mid = require('../middleware');
const adReportedAds = require('../controllers/adReportedAdController');
app.get('/api/admin/reportedadlist',adReportedAds.reportedAdList);
app.get('/api/admin/reportedad/:reportadid', adReportedAds.reportedAdMsg);
// app.post('/api/admin/login', adUserController.login);
// app.get('/api/admin/logout', adUserController.logout);

module.exports = app;