const express = require('express')
const app = express()
var countryController = require('../controllers/countryController');
app.get('/api/countrynames', countryController.getCountryNames);
app.get('/api/getcities/:country_name', countryController.getCityByCountryNames)
module.exports = app;