const Category = require('../model/category');
const Subcategory = require('../model/subcategory');
const Test = require('../model/test');
const Region = require('../model/region');
const mongoose = require('mongoose');
const config = require('../config');

exports.categoryList = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        Category.find({'status': 1}).sort('catname').exec(function (err, category) {
            if (err) throw err;
            if (category.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'category': category }
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
exports.AllSubcatList = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
      if(req.params.catid != ''){
        Subcategory.find({
            catid: req.params.catid, status: 1
        }).sort('subcatname').exec(function (err, subcategory) {
            if (err) throw err;
            if (subcategory.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'subcategory': subcategory },
                });

            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Fetch Failed',
                })
            }

        })
      } else {
        Subcategory.find({status: 1}).exec(function (err, subcategory) {
            if (err) throw err;
            if (subcategory.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'subcategory': [] }
                });

            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Fetch Failed',

                })
            }

        })
      }
    });
};
exports.subCategoryList = function (req, res) {
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
        }).sort('subcatname').exec(function (err, subcategory) {
            if (err) throw err;
            if (subcategory.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'subcategory': subcategory },
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

exports.regionList = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        Region.find({}).sort('regionname').exec(function (err, region) {
            if (err) throw err;
            if (region.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'regions': region },

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

exports.auth = function(req, res) {
    if (req.session.auth) {
        return res.status(200).json({
            status: 'success',
           auth : true
        });
    } else {
        return res.status(200).json({
            status: 'fail',
           auth : false
        });
    }
}
