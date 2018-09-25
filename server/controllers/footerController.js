const mongoose = require('mongoose');
const config = require('../config');
const Newsletter = require('../model/newsletter');
exports.newsletterSubs = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        Newsletter.find({
            email: req.params.email
        }, function (err, subsdata) {
            if (err) throw err;
            if (subsdata.length) {
                return res.status(200).json({
                    status: 'success',
                    data: subsdata,
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: subsdata
                })
            }

        })
    });
};
exports.subscribe = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        var newsletter = new Newsletter();
        newsletter.email = req.body.email;
        newsletter.save(function (error) {
            if (error) {
                return res.status(200).json({
                    status: 'Failed',
                    data: { 'error': error }
                });
            } else {
                return res.status(200).json({
                    status: 'success',
                    data: {'msg': "Subscriped Successfully" },

                });
            }
        });

    });
};