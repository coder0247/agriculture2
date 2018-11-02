const mongoose = require('mongoose');
const config = require('../config');

const MappingTbl =  require('../model/mappingtbl');
const User = require('../model/user');
const Product = require('../model/product');
const Msgs = require ('../model/msg');
const ReportReason = require('../model/reportadreason');
const IntlCodes = require('../model/intlcodes');
const ReportedAds = require('../model/reportedads');
// exports.updateViewedStatus = function (req, res) {
//     mongoose.connect(config.dbUrl, function (err) {
//         if (err) throw err;

//         MostViewed.findOne({
//             client_ip: req.params.clientip,
//             productid: req.params.productid,
//         }, function (error, most_viewed) {
//             if (!most_viewed) {
//                 var mostViewed = new MostViewed();
//                 mostViewed.client_ip = req.params.clientip;
//                 mostViewed.productid = req.params.productid;
//                 mostViewed.save(function (error, most_viewed) {
//                     if (error) {
//                         return res.status(200).json({
//                             status: 'fail',
//                             data: { 'error': error },
//                         });
//                     } else {
//                         return res.status(200).json({
//                             status: 'success',
//                             data: { 'error': true, 'msg': "Successfully viewed once." },
//                         });
//                     }
//                 });
//             } else {
//                 return res.status(200).json({
//                     status: 'fail',
//                     data: { 'error': false, 'msg': "Already visited." },
//                 });
//             }
//         });
//     });
// };

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
        }).populate({ path: 'amtunit' }).exec( function (err, singleproduct) {
            if (singleproduct.length > 0) {
                MappingTbl.find({
                    'productid': req.params.id
                }).select('city country').exec(function (err, productregions) {
                    return res.status(200).json({
                        status: 'success',
                        data: { 'singleproduct': singleproduct, 'location': productregions }
                    });
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
        newmsg.city = req.body.city;
        newmsg.country = req.body.country;
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

exports.reportReason = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        ReportReason.find({}, function (err, reportreason) {
            if (err) throw err;
            if (reportreason.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'reportreason': reportreason },

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
exports.intlcodelist = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        IntlCodes.find({}, function (err, intlcodes) {
            if (err) throw err;
            if (intlcodes.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'intlcodes': intlcodes },

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
exports.reportad = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        IntlCodes.find({"_id": req.body.countrycode}, 'c_phcode', function (err, countryphonecode) {
            if (err) throw err;
            if (countryphonecode.length > 0) {
                    var reportad = new ReportedAds();
                    reportad.adid = req.body.adid;
                    reportad.fullname = req.body.fullname;
                    reportad.email = req.body.email;
                    reportad.phonenumber = countryphonecode[0].c_phcode+req.body.phoneno;
                    reportad.reportadregion = req.body.countrycode; 
                    reportad.reportreason = req.body.reason;
                    reportad.msg = req.body.msg;
                    reportad.save(function (error) {
                        if (error) {
                            return res.status(200).json({
                                status: 'Failed',
                                data: { 'error': error, 'msg': 'Error saving data.' }
                            });
                        } else {
                            return res.status(200).json({
                                status: 'success',
                                data: {'msg': "Thank you for sending the abuse report. Our team will carefully review your comments and take the necessary actions." },

                            });
                        }
                    });

            } else {
                return res.status(200).json({
                    status: 'Failed',
                    message: 'Invalid country code',

                })
            }

        })
        
       

    });
};