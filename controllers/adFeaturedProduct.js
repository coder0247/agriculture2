const mongoose = require('mongoose');
const config = require('../config');
const Featured = require('../model/featured');

exports.makeProductFeatured = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        Featured.findOne({
            'productid': req.params.productid
        }, function (error, featured_subcategory) {
            if ( featured_subcategory ) {
                return res.status(200).json({
                    status: false,
                    message: 'This product is already featured.'
                });
            } else {
                var newFeatured = new Featured();
                newFeatured.categoryid = req.params.categoryid;
                newFeatured.subcatid = req.params.subcatid;
                newFeatured.productid= req.params.productid;
                newFeatured.save(function (error, featured) {
                    if (featured) {
                        return res.status(200).json({
                            status: true,
                            message: 'Featured successfully.'
                        });
                    } else {
                        return res.status(200).json({
                            status: false,
                            message: 'Oops! An error occurred while making featured.'
                        });
                    }
                }); 
            }
            // new code
        });
    });
};

exports.makeProductUnFeatured = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        Featured.findOne({
            'productid': req.params.productid
        }, function (error, featured_subcategory) {

            if (!!featured_subcategory.productid) { 
                Featured.deleteOne({productid: req.params.productid }, function (err, featureddelete) {
                    return res.status(200).json({
                        status: true,
                        message: 'Unfeatured successfully.'
                    });
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! An error occurred while making unfeatured.'
                });
            }
        });
    });
};