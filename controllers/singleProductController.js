const mongoose = require('mongoose');
const config = require('../config');
const MostViewed = require('../model/mostviewed');
const MappingTbl =  require('../model/mappingtbl');
const User = require('../model/user');
const Product = require('../model/product');
const Msgs = require ('../model/msg');
exports.updateViewedStatus = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        MostViewed.findOne({
            client_ip: req.params.clientip,
            productid: req.params.productid,
        }, function (error, most_viewed) {
            if (!most_viewed) {
                var mostViewed = new MostViewed();
                mostViewed.client_ip = req.params.clientip;
                mostViewed.productid = req.params.productid;
                mostViewed.save(function (error, most_viewed) {
                    if (error) {
                        return res.status(200).json({
                            status: 'fail',
                            data: { 'error': error },
                        });
                    } else {
                        return res.status(200).json({
                            status: 'success',
                            data: { 'error': true, 'msg': "Successfully viewed once." },
                        });
                    }
                });
            } else {
                return res.status(200).json({
                    status: 'fail',
                    data: { 'error': false, 'msg': "Already visited." },
                });
            }
        });
    });
};

exports.getSellerInfo = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        MappingTbl.find({
            'productid': req.params.productid
        }, function (err, seller) {
            if (seller.length > 0) {
                User.find({
                    _id: seller[0].userid
                }, { password: 0 }, function (err, user) {
                    return res.status(200).json({
                        status: 'success',
                        data: { 'sellerinfo': user },
                    });
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Fetch Failed',

                })
            }
        });
    });
};
exports.productDetails = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        if (!!req.params.id.match(/^[0-9a-fA-F]{24}$/) === false) {
            return res.status(200).json({
                status: 'Fail',
                message: 'Fail',
                pagenotfound: true

            });
          }
        Product.find({
            '_id': req.params.id
        }, function (err, singleproduct) {
            if (singleproduct.length > 0) {

                return res.status(200).json({
                    status: 'success',
                    data: { 'singleproduct': singleproduct },

                });

            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Fetch Failed',
                    pagenotfound: true

                })
            }
        });
    });
};

exports.postMsg = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        var newmsg = new Msgs();
        newmsg.from = req.body.from;
        newmsg.comment = req.body.comment;
        newmsg.sellerid = req.body.sellerid;
        newmsg.productid = req.body.productid;

        newmsg.save(function (error, sendmsg) {
            if (error) {
                return res.status(200).json({
                    status: 'Failed',
                    data: { 'error': error },

                });
            } else {
                return res.status(200).json({
                    status: 'success',
                    data: { 'error': false, 'msg': "Successfully" },

                });
            }
        });

    });
};