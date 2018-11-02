const MappingTbl = require('../model/mappingtbl');
const Product = require ('../model/product');
const Msgs = require ('../model/msg');
const Amountunit = require ('../model/amountunit');

const MBestseller = require('../model/mbestseller');
const Mmostviewed = require('../model/mmostviewed');
const Mnewarrivals = require('../model/mnewarrivals');
const Monsale = require('../model/monsale');
const Featured = require('../model/featured');
const mongoose = require('mongoose');
const config = require('../config');
const Form = require ('../model/form');
var dashdata = {
    activeadscount: 0,
    archiveadscount: 0,
    inboxnewmsg: 0,
};
exports.productsByUser = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        MappingTbl.find({ userid: req.params.userid })
        .populate({ path: 'subcatid', populate : { path: 'catid', select: 'catname subcatname' }})
        .exec(function (err, mappingfound) {
            if (mappingfound.length > 0) {
                var reformattedArray = mappingfound.map(obj => {
                    return obj.productid;
                });
                Product.find({
                    '_id': { $in: reformattedArray }, 'status': '1'
                }, function (err, docs) {
                    return res.status(200).json({
                        status: 'success',
                        data: { 'product': docs },
                        mapping:mappingfound

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
exports.setProductArchive = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        Product.findByIdAndUpdate({ _id: req.params.pid }, { $set: { status: '0' } }, function (err, archiveproduct) {
            MBestseller.update({productid: req.params.pid }, { status: false }, function (err, bestseller) {
                Mmostviewed.update({productid: req.params.pid }, { status: false }, function (err, mostviewed) {
                    Mnewarrivals.update({productid: req.params.pid }, { status: false }, function (err, newarrivals) {
                        Monsale.update({productid: req.params.pid }, { status: false }, function (err, onsale) {
                            Featured.update({productid: req.params.pid }, { status: false }, function (err, featured) {
                                if (archiveproduct) {
                                    return res.status(200).json({
                                        status: 'success',
                                        data: { 'archiveproduct': archiveproduct },
                                    });
                                } else {
                                    return res.status(200).json({
                                        status: 'fail',
                                        message: archiveproduct,
                                        err: archiveproduct.length
                                    })
                                }
                            });
                        });
                    });

                });
            });
           
        });
    });
};
exports.archiveAds = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        MappingTbl.find({ userid: req.params.userid }, function (err, mappingfound) {
            if (mappingfound.length > 0) {
                var reformattedArray = mappingfound.map(obj => {
                    return obj.productid;
                });
                Product.find({
                    '_id': { $in: reformattedArray }, 'status': '0'
                }, function (err, docs) {
                    return res.status(200).json({
                        status: 'success',
                        data: { 'product': docs },

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
exports.setProductActive = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        Product.findByIdAndUpdate({ _id: req.params.pid }, { $set: { status: '1' } }, function (err, archiveproduct) {
            MBestseller.update({productid: req.params.pid }, { status: true }, function (err, bestseller) {
                Mmostviewed.update({productid: req.params.pid }, { status: true }, function (err, mostviewed) {
                    Mnewarrivals.update({productid: req.params.pid }, { status: true }, function (err, newarrivals) {
                        Monsale.update({productid: req.params.pid }, { status: true }, function (err, onsale) {
                            Featured.update({productid: req.params.pid }, { status: true }, function (err, featured) {
                                if (archiveproduct) {
                                    return res.status(200).json({
                                        status: 'success',
                                        data: { 'archiveproduct': archiveproduct },
                                    });
                                } else {
                                    return res.status(200).json({
                                        status: 'fail',
                                        message: 'failed'
                                    })
                                }
                            });
                        });
                    });

                });
            });
            
        });
    });
}
exports.userDashboard = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        dashdata.activeadscount =0;
        dashdata.archiveadscount =0;
        dashdata.inboxnewmsg = 0;
        MappingTbl.find({ userid: req.params.userid })
        .populate({ path: 'subcatid', populate : { path: 'catid', select: 'catname subcatname' }})
        .exec(function (err, mappingfound) {
            if (mappingfound.length > 0) {
                var reformattedArray = mappingfound.map(obj => {
                    return obj.productid;
                });
                Product.find({
                    '_id': { $in: reformattedArray }, 'status': '1'
                }, function (err, activeads) {
                    Product.find({
                        '_id': { $in: reformattedArray }, 'status': '0'
                    }, function (err, archiveads) {
                        dashdata.archiveadscount = archiveads.length;

                    });
                    dashdata.activeadscount = activeads.length;
                    return res.status(200).json({
                        status: 'success',
                        data: dashdata
                    });
                });

            } else {
                return res.status(200).json({
                    status: 'success',
                    data: dashdata
                });
            }

        });
        Msgs.find({ 'sellerid': req.params.userid , 'viewstatus' : false }, function (err, inbox) {
            if (err) throw err;
            if (inbox.length > 0) {
                dashdata.inboxnewmsg = inbox.length;
           } else {
            dashdata.inboxnewmsg =0;
            }
        })
    });
}
exports.amountUnitList = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        Amountunit.find({}, function (err, amountunit) {
            if (err) throw err;
            if (amountunit.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'amountunit': amountunit },
                });
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Fetch Failed',
                })
            }
        })
    });
}
exports.updateProduct = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        // console.log(req.body.pricetype === "true"? "negtrue": "negfalse");
        let productupdateinfo = {
            pname : req.body.productname,
            unitprice : req.body.unitprice,
            pimage : req.body.productimage,
            amtunit : req.body.amtunit,
            saleamount : req.body.saleamount, 
            pdesc : req.body.pdesc,
            currencytype : req.body.currencytype, 
            negotiable: req.body.pricetype === true ? true: false,
            updated_at: Date.now()
        }
        let mappingtableupdate = {
            subcatid : req.body.subcat,
            regionid : req.body.region,
        }
        Product.findByIdAndUpdate({ _id: req.body.productid }, { $set: productupdateinfo }, function (error, productupdate) {
            if (productupdate) {
                MappingTbl.findByIdAndUpdate({ 'productid': req.body.productid }, { $set: mappingtableupdate }, function (error, mappingtableupdate) {
                    return res.status(200).json({
                        status: true,
                        message: {'product' : 'productupdate updated successfully', 'mappingtableupdate' : 'mappingtableupdate updated successfully' },
                        data: { 'productupdate': productupdate, 'mappingtableupdate': mappingtableupdate },
                    });
                });


            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! There was an error while updating',
                    errors: error.errors,
                    params: productupdate
                });
            }
        });
    });
}
exports.removeProduct = function (req, res) { 
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        Product.findOneAndDelete({ _id: req.params.product_id },function (err) {
            if (err) throw err;
            MappingTbl.deleteOne({ productid: req.params.product_id }, function (err) {
                if (err) return handleError(err);
                MBestseller.deleteOne({productid: req.params.product_id }, function (err, bestseller) {
                    Mmostviewed.deleteOne({productid: req.params.product_id }, function (err, mostviewed) {
                        Mnewarrivals.deleteOne({productid: req.params.product_id }, function (err, newarrivals) {
                            Monsale.deleteOne({productid: req.params.product_id }, function (err, onsale) {
                                Featured.deleteOne({productid: req.params.product_id }, function (err, featured) {
                                    return res.status(200).json({
                                        status: 'success',
                                        data: { 'delete': 'delete successfully ' },
                                    });
                                });
                            });
                        });
    
                    });
                });
              });
        });
    });
}
exports.inbox = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        Msgs.find({ 'sellerid': req.body.userid }).sort('-date').populate({ path: 'from', select: 'firstname lastname' }).exec(function (err, inbox) {
            if (err) throw err;
            if (inbox.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'inbox': inbox },
                });
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Fetch Failed',
                })
            }
        })
    });
}
exports.sent = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        Msgs.find({ 'from': req.body.userid }).sort('-date').populate({ path: 'from', select: 'firstname lastname' }).exec(function (err, sentmsg) {
            if (err) throw err;
            if (sentmsg.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'sentmsg': sentmsg },
                });
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Fetch Failed',

                })
            }

        })
    });
}
exports.singleInbox = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        Msgs.find({ _id: req.params.msgid }).populate({ path: 'from', select: 'firstname lastname email' }).
            populate({ path: 'productid' }).exec(function (err, msgs) {
                if (err) throw err;
                if (msgs.length > 0) {
                    Msgs.findByIdAndUpdate({ _id: req.params.msgid }, { $set: { viewstatus: true } }, function (err, viewstatusupdated) {
                        return res.status(200).json({
                            status: 'success',
                            data: { 'msgs': msgs },
                        });

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
exports.singleSent = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        Msgs.find({ _id: req.params.msgid }).populate({ path: 'sellerid', select: 'firstname lastname email' }).
            populate({ path: 'productid' }).exec(function (err, msgs) {
                if (err) throw err;
                if (msgs.length > 0) {
                    return res.status(200).json({
                        status: 'success',
                        data: { 'msgs': msgs },
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
exports.addNewProduct = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        /*
        subcat: this.newadForm.value.subcatnames,








        addinfo: this.newadForm.value.addinfo,
        city: this.newadForm.value.city,
        country: this.newadForm.value.country,
        manufacture: this.newadForm.value.manufacture,
        * status: this.newadForm.value.status,
        yearmfg: this.newadForm.value.yearmfg,
        userid: userid
        */ 
        var newProduct = new Product();
        newProduct.pname = req.body.productname;
        newProduct.pdesc = req.body.description;
        newProduct.unitprice = req.body.unitprice;
        newProduct.pimage = req.body.productimage[0];
        newProduct.amtunit = req.body.amtunit;
        newProduct.saleamount = req.body.saleamount;
        newProduct.currencytype = req.body.currencytype;
        newProduct.condition = req.body.condition;
        newProduct.negotiable = req.body.priceneg === 'no' ? false: true;
        newProduct.status = "1";
        newProduct.productstatus = req.body.status;
        newProduct.addinfo = req.body.addinfo;
        newProduct.manufacture = req.body.manufacture;
        newProduct.yearmfg = req.body.yearmfg;
        
        newProduct.save(function (error, product) {
            if (error) {
                return res.status(200).json({
                    status: 'Failed',
                    data: { 'error': error }
                });
            } else {
                var mappingtbl = new MappingTbl();
                mappingtbl.subcatid = req.body.subcat;
                mappingtbl.productid = product._id;
                mappingtbl.country = req.body.country;
                mappingtbl.city = req.body.city;
                mappingtbl.userid = req.body.userid;
                mappingtbl.save(function (error, mappingtbl) {
                    if (error) {
                        return res.status(200).json({
                            status: 'Failed',
                            data: { 'error': error }
                        });
                    } else {
                        return res.status(200).json({
                            status: 'success',
                            data: { 'error': product, 'msg': "Product Added Successfully" }
                        });
                    }
                });

            }
        });
    });
};
exports.getformfields = function (req, res) {

    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        Form.find({subcatid: req.params.subcatid}).exec(function (err, formfields) {
            if (err) throw err;
            if (formfields.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: formfields
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