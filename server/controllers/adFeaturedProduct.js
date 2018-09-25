const mongoose = require('mongoose');
const config = require('../config');
const Featured = require('../model/featured');

exports.makeProductFeatured = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        Featured.findOne({
            'subcatid': req.params.subcatid
        }, function (error, featured_subcategory) {
            if (featured_subcategory) { //Update old data for subcategory
                var product_id = req.params.productid;
                var product_ids = featured_subcategory.productid;

                var found = product_ids.find((element) => {
                    return element.toString() === product_id.toString();
                });

                if (found) {
                    return res.status(200).json({
                        status: false,
                        message: 'This product is already featured.'
                    });
                } else { //Insert new product id in sub document array
                    featured_subcategory.productid.push(product_id);
                    featured_subcategory.save(function (err, featured) {
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
            } else { //Insert new record for subcategory
                var newFeatured = new Featured();
                newFeatured.categoryid = req.params.categoryid;
                newFeatured.subcatid = req.params.subcatid;
                newFeatured.productid.push(req.params.productid);
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
        });
    });
};

exports.makeProductUnFeatured = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        Featured.findOne({
            'subcatid': req.params.subcatid
        }, function (error, featured_subcategory) {
            if (featured_subcategory) { //Update old data for subcategory
                var product_id = req.params.productid;
                var product_ids = featured_subcategory.productid;

                var found = product_ids.find((element) => {
                    return element.toString() === product_id.toString();
                });

                if (found) {
                    featured_subcategory.productid.pull(product_id);
                    featured_subcategory.save(function (err, featured) {
                        if (featured) {
                            return res.status(200).json({
                                status: true,
                                message: 'Unfeatured successfully.'
                            });
                        } else {
                            return res.status(200).json({
                                status: false,
                                message: 'Oops! An error occurred while making unfeatured.'
                            });
                        }
                    });
                } else {
                    return res.status(200).json({
                        status: false,
                        message: 'Oops! Product is not featured. Make it featured first.'
                    });
                }
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! An error occurred while making unfeatured.'
                });
            }
        });
    });
};