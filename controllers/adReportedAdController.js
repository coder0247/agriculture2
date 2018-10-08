const User = require('../model/user');
var crypt = require("apache-crypt");
const mongoose = require('mongoose');
const config = require('../config');
const MappingTbl = require('../model/mappingtbl');
const Product = require('../model/product');
const Featured = require('../model/featured');
const Subcategory = require('../model/subcategory');
const ReportedAds = require('../model/reportedads');

exports.reportedAdList = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
//        Msgs.find({ 'sellerid': req.body.userid }).sort('-date').populate({ path: 'from', select: 'firstname lastname' }).exec(function (err, inbox) {
        ReportedAds.find().sort('-date').populate({ path: 'reportreason'}).select('fullname email msg created_at viewstatus').exec(function (err, reportedadlist) {
            if (reportedadlist.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'reportedadlist': reportedadlist }
                });
            } else {
                return res.status(200).json({
                    status: 'Failed',
                    message: 'Currently there 0 reported ads',
                })
            }
        })
    });
}
exports.reportedAdMsg = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
//        Msgs.find({ 'sellerid': req.body.userid }).sort('-date').populate({ path: 'from', select: 'firstname lastname' }).exec(function (err, inbox) {
        ReportedAds.find({'_id': req.params.reportadid}).exec(function (err, reportadmsg) {
            if (reportadmsg.length > 0) {
                Product.find({'adid': reportadmsg[0].adid }, function(error, productinfo){
                    if (productinfo.length > 0) {
                        return res.status(200).json({
                            status: 'success',
                            data: { 'reportadmsg': reportadmsg , 'productinfo': productinfo}
                        });
                    } else {
                        return res.status(200).json({
                            status: 'Failed',
                            message: 'No  product for reported details'
                        })
                    }
                });
               
            } else {
                return res.status(200).json({
                    status: 'Failed',
                    message: 'Currently there 0 reported ads',
                })
            }
        })
    });
}

// exports.activeSubCategoriesList = function (req, res) {
//     mongoose.connect(config.dbUrl, function (err) {
//         if (err) throw err;

//         Subcategory.find({
//             catid: req.params.catid,
//             status: 1,
//             is_deleted: false
//         }, function (error, subcategories) {
//             if (subcategories.length > 0) {
//                 return res.status(200).json({
//                     status: true,
//                     message: 'Subcategories fetched successfully',
//                     data: { 'subcategories': subcategories },
//                 });
//             } else {
//                 return res.status(200).json({
//                     status: false,
//                     message: 'Oops! No Subcategories found',
//                 })
//             }
//         })
//     });
// }

// exports.getProductListByCategorySubcategory = function(req, res) {
//     mongoose.connect(config.dbUrl, function (err) {
//         if (err) throw err;

//         MappingTbl.find({
//             subcatid: req.params.subcatid
//         }, function (error, mapped_product) {
//             if (mapped_product.length > 0) {
//                 let product_ids = mapped_product.map(obj => {
//                     return obj.productid;
//                 });

//                 Product.find({
//                     _id: { $in: product_ids },
//                     status: 1
//                 }, function (err, products) {
//                     if (products.length > 0) {
//                         var featured = [];

//                         Featured.findOne({
//                             subcatid: req.params.subcatid
//                         }, function (error, product_list) {
//                             var newProductObj = [];
//                             if (product_list) {
//                                 featured = product_list.productid;
//                                 products.forEach((item, index) => {
//                                     var obj = Object.assign({ 'is_featured': false }, item._doc);
//                                     featured.forEach((element) => {
//                                         if (element.toString() === item._id.toString()) {
//                                             obj = Object.assign({ 'is_featured': true }, item._doc);
//                                         }
//                                     });
//                                     newProductObj.push(obj);
//                                 });
//                             } else {
//                                 products.forEach((item, index) => {
//                                     var obj = Object.assign({ 'is_featured': false }, item._doc);
//                                     newProductObj.push(obj);
//                                 });
//                             }

//                             return res.status(200).json({
//                                 status: true,
//                                 message: 'Products fetched successfully',
//                                 data: { 'products': newProductObj },
//                             });
//                         });
//                     } else {
//                         return res.status(200).json({
//                             status: false,
//                             message: 'Oops! No product found',
//                         });
//                     }
//                 });
//             } else {
//                 return res.status(200).json({
//                     status: false,
//                     message: 'Oops! No product found',
//                 });
//             }
//         })
//     });
// };