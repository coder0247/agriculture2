const mongoose = require('mongoose');
const config = require('../config');
const MNewarrivala = require('../model/mnewarrivals');

exports.makeProductNewArrival = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        var MNewarrival = new MNewarrivala();
        MNewarrival.productid = req.params.productid;
        MNewarrival.save(function (error, newarrival) {
            if (newarrival) {
                return res.status(200).json({
                    status: true,
                    message: 'New Arrival added successfully.'
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! An error occurred while making New Arrival.'
                });
            }
        });
    });
};

exports.makeProductNotNewArrival = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        MNewarrivala.findOneAndDelete({ productid: req.params.productid },function (err) {
            if (err) throw err;
            return res.status(200).json({
                status: true,
                message: 'New Arrival removed.'
            });
            
        });
    });
};
