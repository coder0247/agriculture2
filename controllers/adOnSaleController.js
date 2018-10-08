const mongoose = require('mongoose');
const config = require('../config');
const MOnsalea = require('../model/monsale');

exports.makeProductOnSale = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        var MOnsale = new MOnsalea();
        MOnsale.productid = req.params.productid;
        MOnsale.save(function (error, onsale) {
            if (onsale) {
                return res.status(200).json({
                    status: true,
                    message: 'On sale added successfully.'
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! An error occurred while making on sale.'
                });
            }
        });
    });
};

exports.makeProductNotOnSale = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        MOnsalea.findOneAndDelete({ _id: req.params.id },function (err) {
            if (err) throw err;
            return res.status(200).json({
                status: true,
                message: 'On sale removed.'
            });
            
        });
    });
};
