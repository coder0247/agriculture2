const mongoose = require('mongoose');
const config = require('../config');
const Contact = require('../model/contact');
exports.contact = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        var contactdetails = new Contact();
        contactdetails.fullname = req.body.fullname;
        contactdetails.email = req.body.email;
        contactdetails.phonenumber = req.body.phoneno;
        contactdetails.msg = req.body.msg;
        contactdetails.save(function (error) {
            if (error) {
                return res.status(200).json({
                    status: 'Failed',
                    data: { 'error': error }
                });
            } else {
                return res.status(200).json({
                    status: 'success',
                    data: {'msg': "We will contact you shortly." },

                });
            }
        });

    });
};