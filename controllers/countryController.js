const list = require('../modules/countrycity');
// var countriesNames = require ('full-countries-cities').getCountryNames(); // Returns a full array of only the country names.
// var cities = require ('full-countries-cities').getCities(country_name); // Returns an array of city names of the particular country.

exports.getCountryNames = function (req, res) {
    return res.status(200).json({
        status: 'success',
        countrylist: list.getCountryNames()
    });
};

exports.getCityByCountryNames = function (req, res) {
    if (typeof list.getCities(req.params.country_name) !== 'undefined' && list.getCities(req.params.country_name).length) {
        return res.status(200).json({
            status: 'success',
            citylist: list.getCities(req.params.country_name)
        });
    } else {
        return res.status(200).json({
            status: 'fail'
        });
    }
};