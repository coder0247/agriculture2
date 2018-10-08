const mongoose = require('mongoose');
const config = require('../config');
const MBestseller = require('../model/mbestseller');

exports.makeProductBestSeller = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        var MBestSeller = new MBestseller();
        MBestSeller.productid = req.params.productid;
        MBestSeller.save(function (error, bestseller) {
            if (bestseller) {
                return res.status(200).json({
                    status: true,
                    message: 'Best Seller added uccessfully.'
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! An error occurred while making Best Seller.'
                });
            }
        });
    });
};

exports.makeProductNotBestSeller = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        MBestSeller.findOneAndDelete({ productid: req.params.productid },function (err) {
            if (err) throw err;
            return res.status(200).json({
                status: true,
                message: 'Best Seller removed.'
            });
            
        });
    });
};
