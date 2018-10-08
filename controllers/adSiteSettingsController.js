const User = require('../model/user');
var crypt = require("apache-crypt");
const mongoose = require('mongoose');
const config = require('../config');
const SiteSettings = require('../model/sitesettings');


exports.getSiteSettings = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        SiteSettings.find({}, function (error, sitesettings) {
            if (sitesettings.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'sitesettings': sitesettings },
                });
            } else {
                return res.status(200).json({
                    status: 'Failed',
                    message: 'Oops! An error occured while fetching the site settings',
                   
                })
            }
        })
    });
}

exports.updateSiteSettings = function (req , res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        var data = {
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            address: req.body.address,
            footertext: req.body.footertext,
            twitter: req.body.twitter,
            facebook: req.body.facebook,
            pinterest: req.body.pinterest,
            instagram: req.body.instagram,
            updated_at : Date.now()
        };
        SiteSettings.findByIdAndUpdate({ _id: req.body.settingid }, { $set: data }, function (error, settingsupdated) {
            if (settingsupdated) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'settingsupdated': "Settings updated" },
                });
            } else {
                return res.status(200).json({
                    status: 'Failed',
                    data: { 'settingsupdated': "Error updating" }
                });
            }
        });
    });
};