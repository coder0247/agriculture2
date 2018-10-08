const express = require('express')
const app = express()
var adSiteSettingsController = require('../controllers/adSiteSettingsController');
app.get('/api/admin/sitesettings', adSiteSettingsController.getSiteSettings);
app.post('/api/admin/sitesettings', adSiteSettingsController.updateSiteSettings);

module.exports = app;