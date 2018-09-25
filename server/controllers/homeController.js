const Featured = require('../model/featured');
const Msgs = require('../model/msg');
const MostViewed = require('../model/mostviewed');
const Product = require('../model/product');
const mongoose = require('mongoose');
const config = require('../config');
exports.featured = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        Featured.find({}).populate({ path: 'categoryid' }).populate({ path: 'subcatid' }).populate({ path: 'productid' }).exec(function (err, featured) {
            if (err) throw err;
            if (featured.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'featured': featured }
                });
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Fetch Failed',

                })
            }
        })
    });
};

exports.bestSellByLimit = function (req, res) {
    var limit = req.params.limit || 7;
    limit = parseInt(limit);

    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        const aggregatorOpts = [
            {
                "$group": {
                    "_id": { productid: "$productid", from: "$from" },
                    "productid": { $first: "$productid" },
                    "sellerid": { $first: "$sellerid" },
                }
            },
            {
                "$group": {
                    "_id": { productid: "$_id.productid" },
                    "productid": { $first: "$productid" },
                    "sellerid": { $first: "$sellerid" },
                    "count": { "$sum": 1 }
                }
            },
            {
                "$project": {
                    "_id": 0
                }
            },
            {
                "$limit": limit
            },
            {
                "$sort": { "count": -1 }
            }
        ];

        Msgs.aggregate(aggregatorOpts).exec(function (err, bestselllist) {
            if (err) throw err;
            const populateOpts = [
                { path: 'productid' },
                { path: 'sellerid' }
            ]
            Msgs.populate(bestselllist, populateOpts, function (err, bestselllist) {
                if (bestselllist.length > 0) {
                    return res.status(200).json({
                        status: 'success',
                        data: { 'bestselllist': bestselllist },
                    });
                } else {
                    return res.status(200).json({
                        status: 'fail',
                        message: 'Fetch Failed',

                    })
                }
            });
        });
    });
};

exports.mostViewedByLimit = function (req, res) {
    var limit = req.params.limit || 7;
    limit = parseInt(limit);

    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        const aggregatorOpts = [
            {
                "$group": {
                    "_id": { productid: "$productid" },
                    "productid": { $first: "$productid" },
                    "count": { "$sum": 1 }
                }
            },
            {
                "$project": {
                    "_id": 0
                }
            },
            {
                "$limit": limit
            },
            {
                "$sort": { "count": -1 }
            }
        ];

        MostViewed.aggregate(aggregatorOpts).exec(function (err, mostviewed) {
            if (err) throw err;
            const populateOpts = [
                { path: 'productid' }
            ]
            MostViewed.populate(mostviewed, populateOpts, function (err, mostviewed) {
                if (mostviewed.length > 0) {
                    return res.status(200).json({
                        status: 'success',
                        data: { 'mostviewed': mostviewed },
                    });
                } else {
                    return res.status(200).json({
                        status: 'fail',
                        message: 'Fetch Failed',
                    })
                }
            });
        });
    });
};
exports.newArrivalByLimit = function (req, res) {
    var limit = req.params.limit || 7;
    limit = parseInt(limit);

    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        const aggregatorOpts = [
            {
                "$sort": { "created_at": -1 }
            }
        ];

        Product.find({}).sort({ 'created_at': -1 }).limit(limit).exec(function (err, newarrival) {
            if (newarrival.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'newarrival': newarrival },
                });
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Fetch Failed',
                })
            }
        });
    });
};