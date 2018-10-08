const User = require('../model/user');
var crypt = require("apache-crypt");
const mongoose = require('mongoose');
const config = require('../config');
const Pages = require('../model/pages');


exports.getPageContent = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        Pages.find({ 'pageslug': req.params.pageslug }, function (error, pagecontent) {
            if (pagecontent.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'pagecontent': pagecontent },
                });
            } else {
                return res.status(200).json({
                    status: 'Failed',
                    message: 'Oops! An error occured while fetching the page content',
                    data: req.params.pageslug,
                    error: error
                })
            }
        })
    });
}

exports.updatePageContent = function (req , res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        var data = {
            content: req.body.content,
            updated_at : Date.now()
        };
        Pages.findOneAndUpdate({ pageslug: req.body.pageslug }, { $set: data }, function (error, pageupdated) {
            if (pageupdated) {
                return res.status(200).json({
                    status: true,
                    data: { 'pageupdate': "Page updated" },
                });
            } else {
                return res.status(200).json({
                    status: false,
                    data: { 'pageupdate': "Error updating" }
                });
            }
        });
    });
};