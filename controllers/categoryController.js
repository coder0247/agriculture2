const mongoose = require('mongoose');
const config = require('../config');
const Subcategory = require('../model/subcategory');
const MappingTbl = require('../model/mappingtbl');
const Product = require('../model/product');
const Category = require('../model/category');
exports.productListByCat = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        if (!!req.params.id.match(/^[0-9a-fA-F]{24}$/) === false) {
            return res.status(200).json({
                status: 'Fail',
                msg: 'Fail',
                pagenotfound: true

            });
          }
            Subcategory.find({ 'catid': req.params.id }).sort('subcatname').exec(function (err, subcatfound) {
                if (err) throw err;
                if (subcatfound.length > 0) {
                    var maproductarray = subcatfound.map(obj => {
                        return obj._id;
                    });
                    MappingTbl.find({ subcatid: { $in: maproductarray } }, function (err, mappingfound) {
                        if (mappingfound.length > 0) {
                            var reformattedArray = mappingfound.map(obj => {
                                return obj.productid;
                            });
                            Product.find({
                                '_id': { $in: reformattedArray }, 'status': '1'
                            }, function (err, docs) {
                                if (docs.length > 0) {
                                    Category.find({ _id: req.params.id }, function (err, catename) {
                                        return res.status(200).json({
                                            status: 'success',
                                            data: { 'product': docs },
                                            subcat: { 'subcat': subcatfound },
                                            cat: { 'cat': catename[0] }
                                        });
                                    });

                                } else {
                                    return res.status(200).json({
                                        status: 'Fail',
                                        msg: 'Fail',
                                    });
                                }

                            });
                        } else {
                            return res.status(200).json({
                                status: 'fail',
                                message: 'Fetch Failed'
                            })
                        }
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

exports.getProductListBySubCat = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        MappingTbl.find({ subcatid: { $in: req.body.subcatlist } }).populate({ path: 'productid'}).exec(function (err, mappingfound) {
      
            if (mappingfound.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: {'prodlist' : mappingfound }
                });
            } else {
                return res.status(200).json({
                    status: 'Fail',
                    msg: 'Fail',
    
                });
            }
    });
    });
};