const mongoose = require('mongoose');
const config = require('../config');
const MMostvieweda = require('../model/mmostviewed');

exports.makeProductMostviewed = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        var MMostviewed = new MMostvieweda();
        MMostviewed.productid = req.params.productid;
        MMostviewed.save(function (error, mostviewed) {
            if (mostviewed) {
                return res.status(200).json({
                    status: true,
                    message: 'Mostviewed added Successfully.'
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! An error occurred while making Mostviewed.'
                });
            }
        });
    });
};

exports.makeProductNotMostviewed = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        MMostviewed.findOneAndDelete({ productid: req.params.productid },function (err) {
            if (err) throw err;
            return res.status(200).json({
                status: true,
                message: 'Mostviewed removed.'
            });
            
        });
    });
};
