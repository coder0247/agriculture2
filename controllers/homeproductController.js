const Subcategory = require('../model/subcategory');
const MappingTbl = require('../model/mappingtbl');
const MBestseller = require('../model/mbestseller');
const Mmostviewed = require('../model/mmostviewed');
const Mnewarrivals = require('../model/mnewarrivals');
const Monsale = require('../model/monsale');
const Featured = require('../model/featured');
const mongoose = require('mongoose');
const config = require('../config');
exports.homeprodcatwisestatus = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        if (!!req.params.catid.match(/^[0-9a-fA-F]{24}$/) === false) {
            return res.status(200).json({
                status: 'Fail',
                msg: 'Fail',
                pagenotfound: true
            });
        }
        Subcategory.find({
            catid: req.params.catid, status: 1
        }, '_id', function (err, subcategory) {
            if (err) throw err;
            if (subcategory.length > 0) {
                var reformattedArray = subcategory.map(obj => {
                    return obj._id;
                });
                MappingTbl.find({
                    'subcatid': { $in: reformattedArray }
                }, 'productid').populate({ path: 'productid', select: '_id', match: { "status": "1" } }).exec(function (err, docs) {
                    var bestsellerproductArray = docs.map(obj => {
                        if (obj.productid !== null) { return obj.productid._id };
                    });
                    var criteria = {
                        productid: { $in: bestsellerproductArray }
                    };
                    MBestseller.update(criteria, { status: req.params.newstatus }, { multi: true }, function (err, bestseller) {
                        Mmostviewed.update(criteria, { status: req.params.newstatus }, { multi: true }, function (err, mostviewed) {
                            Mnewarrivals.update(criteria, { status: req.params.newstatus }, { multi: true }, function (err, newarrivals) {
                                Monsale.update(criteria, { status: req.params.newstatus }, { multi: true }, function (err, onsale) {
                                    Featured.update(criteria, { status: req.params.newstatus }, { multi: true }, function (err, featured) {
                                        return res.status(200).json({
                                            status: 'success',
                                            data: { 'msg': 'done successfully' },
                                            bestsellerproductArray,
                                            bestseller,
                                            mostviewed,
                                            newarrivals,
                                            onsale,
                                            featured,
                                            docs
                                        });
                                    });
                                });
                            });

                        });

                    });

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

exports.homeprodsubcatwisestatus = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        MappingTbl.find({ subcatid: req.params.subcatid }, 'productid').populate({ path: 'productid', select: '_id', match: { "status": "1" } }).exec(function (err, mappingfound) {

            if (mappingfound.length > 0) {
                var bestsellerproductArray = mappingfound.map(obj => {
                    if (obj.productid !== null) { return obj.productid._id };
                });
                var criteria = {
                    productid: { $in: bestsellerproductArray }
                };
                MBestseller.update(criteria, { status: req.params.newstatus }, { multi: true }, function (err, bestseller) {
                    Mmostviewed.update(criteria, { status: req.params.newstatus }, { multi: true }, function (err, mostviewed) {
                        Mnewarrivals.update(criteria, { status: req.params.newstatus }, { multi: true }, function (err, newarrivals) {
                            Monsale.update(criteria, { status: req.params.newstatus }, { multi: true }, function (err, onsale) {
                                Featured.update(criteria, { status: req.params.newstatus }, { multi: true }, function (err, featured) {
                                    return res.status(200).json({
                                        status: true,
                                        data: { 'message': 'Updated successfully' },
                                    });
                                });
                            });
                        });

                    });
                });
            } else {
                return res.status(200).json({
                        status: true,
                        data: { 'message': 'Updated successfully' }
                });
            }
        });
    });
};