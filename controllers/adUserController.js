const User = require('../model/user');
var crypt = require("apache-crypt");
const mongoose = require('mongoose');
const config = require('../config');
const MappingTbl = require('../model/mappingtbl');
const Product = require('../model/product');
const Featured = require('../model/featured');
const Subcategory = require('../model/subcategory');
const BestSeller = require('../model/mbestseller');
const MostViewed = require('../model/mmostviewed');
const OnSale = require('../model/monsale');
const NewArrivals = require('../model/mnewarrivals');

const MBestseller = require('../model/mbestseller');
const Mmostviewed = require('../model/mmostviewed');
const Mnewarrivals = require('../model/mnewarrivals');
const Monsale = require('../model/monsale');


exports.getUserDetails = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        User.find({'_id' : req.params.uid}, 'firstname lastname phonenumber email region usercountrycode').populate({ path: 'usercountrycode'}).exec(function (err, userdetails) {
            if (err) throw err;
            if (userdetails.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: userdetails ,
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
exports.activateUser = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        var activestatus = {
            active: true
        };
        MappingTbl.find({
            userid: req.params.uid
        }, function (error, mapped_product) {
            var reformattedArray = mapped_product.map(obj => {
            return obj.productid;
        });
         User.findByIdAndUpdate({ _id : req.params.uid }, { $set: activestatus }, function (error, user) {
            Product.update({ _id:  {$in: reformattedArray} }, { $set: { status: '1' } },{ multi: true }, function (err, archiveproduct) {
                MBestseller.update({productid: {$in: reformattedArray}}, { status: true },{ multi: true }, function (err, bestseller) {
                    Mmostviewed.update({productid: {$in: reformattedArray} }, { status: true },{ multi: true }, function (err, mostviewed) {
                        Mnewarrivals.update({productid: {$in: reformattedArray} }, { status: true },{ multi: true }, function (err, newarrivals) {
                            Monsale.update({productid: {$in: reformattedArray} }, { status: true },{ multi: true }, function (err, onsale) {
                                Featured.update({productid: {$in: reformattedArray} }, { status: true },{ multi: true }, function (err, featured) {
                                    if (archiveproduct) {
                                        return res.status(200).json({
                                            status: 'success',
                                            msg: 'User Activated.'
                                        });
                                    } else {
                                        return res.status(200).json({
                                            status: 'fail',
                                            msg: 'Action failed'
                                        })
                                    }
                                });
                            });
                        });

                    });
                });
                
            });
    });     
        });
      

    });
};
exports.deactivateUser = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        var activestatus = {
            active: false
        };
        
        MappingTbl.find({
            userid: req.params.uid
        }, function (error, mapped_product) {
            var reformattedArray = mapped_product.map(obj => {
            return obj.productid;
        });
        User.findByIdAndUpdate({ _id : req.params.uid }, { $set: activestatus }, function (error, user) {
        Product.update({ _id:  {$in: reformattedArray} }, { $set: { status: "0" } }, { multi: true }, function (err, archiveproduct) {
            MBestseller.update({productid: {$in: reformattedArray}}, { $set: { status: false } },{ multi: true }, function (err, bestseller) {
                Mmostviewed.update({productid: {$in: reformattedArray} }, { $set: { status: false } },{ multi: true }, function (err, mostviewed) {
                    Mnewarrivals.update({productid: {$in: reformattedArray} },{ $set: { status: false} },{ multi: true }, function (err, newarrivals) {
                        Monsale.update({productid: {$in: reformattedArray} },{ $set: { status: false } },{ multi: true } , function (err, onsale) {
                            Featured.update({productid: {$in: reformattedArray} }, { $set: { status: false } }, { multi: true }, function (err, featured) {
                                    if (archiveproduct) {
                                        return res.status(200).json({
                                            status: 'success',
                                            msg: 'User Deactivated.'
                                        });
                                    } else {
                                        return res.status(200).json({
                                            status: 'fail',
                                            msg: 'Action failed.'
                                        })
                                    }
                            });
                        });
                    });

                });
            });
            
        });
    });     
        });
      

    });
};
exports.deleteUser = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        MappingTbl.find({
            userid: req.params.uid
        }, function (error, mapped_product) {
            var reformattedArray = mapped_product.map(obj => {
            return obj.productid;
        });
      
        Product.remove({ _id:  {$in: reformattedArray} }, function (err, archiveproduct) {
            MBestseller.remove({productid: {$in: reformattedArray}}, function (err, bestseller) {
                Mmostviewed.remove({productid: {$in: reformattedArray} }, function (err, mostviewed) {
                    Mnewarrivals.remove({productid: {$in: reformattedArray} }, function (err, newarrivals) {
                        Monsale.remove({productid: {$in: reformattedArray} } , function (err, onsale) {
                            Featured.remove({productid: {$in: reformattedArray} }, function (err, featured) {
                                MappingTbl.remove({userid: req.params.uid} , function (err, featured) {
                                    User.remove({ _id : req.params.uid }, function (err, featured) {
                                        if (archiveproduct) {
                                            return res.status(200).json({
                                                status: 'success',
                                                msg: 'User Deleted.'
                                            });
                                        } else {
                                            return res.status(200).json({
                                                status: 'fail',
                                                msg: 'Action Failed.'
                                            })
                                        }
                                    });
                                });
                                    
                            });
                        });
                    });

                });
            });
            
        });
       
        });
     
    });
};
exports.logout = function (req, res) {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.status(200).json({
                    status: true,
                    message: 'Logged out successfully.'
                });
            }
        });
    }
};
exports.adminAuth = function (req, res) {
    if (req.session.admin_auth) {
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
};
exports.login = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        User.findOne({
            email: req.body.email,
            is_admin: true
        }, function (err, user) {
            if (err) throw err;

            if (user) {
                var encryptedPassword = crypt(req.body.password, user.password);
                if (encryptedPassword == user.password) {
                    var newUserObj = {
                        _id: user._id,
                        email: user.email,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        middlename: user.middlename,
                        is_admin: user.is_admin
                    }

                    req.session.admin_id = newUserObj._id;
                    req.session.admin_auth = true;
                    req.session.admin_details = newUserObj;

                    return res.status(200).json({
                        status: true,
                        message: 'Logged in successfully.',
                        data: {
                            'user': newUserObj,
                            'sessiondata': req.session
                        }
                    });
                } else {
                    return res.status(200).json({
                        status: false,
                        message: 'Invalid password.'
                    });
                }
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Invalid email.'
                });
            }
        })
    });
};
 
exports.userList = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        User.find({ 'is_admin': false }, function (error, users) {
            if (users.length > 0) {
                return res.status(200).json({
                    status: true,
                    message: 'Users fetched successfully', 
                    data: { 'users': users },
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! An error occured while fetching the Users',
                })
            }
        })
    });
}

exports.activeSubCategoriesList = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        Subcategory.find({
            catid: req.params.catid,
            status: 1,
            is_deleted: false
        }, function (error, subcategories) {
            if (subcategories.length > 0) {
                return res.status(200).json({
                    status: true,
                    message: 'Subcategories fetched successfully',
                    data: { 'subcategories': subcategories },
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! No Subcategories found',
                })
            }
        })
    });
}

exports.getProductListByCategorySubcategory = function(req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        MappingTbl.find({
            subcatid: req.params.subcatid
        }, function (error, mapped_product) {
            if (mapped_product.length > 0) {
                let product_ids = mapped_product.map(obj => {
                    return obj.productid;
                });

                Product.find({
                    _id: { $in: product_ids },
                    status: 1
                }, function (err, products) {
                    if (products.length > 0) {
                        var featured = [];

                        Featured.find({
                            subcatid: req.params.subcatid
                        }, function (error, product_list) {
                            var newProductObj = [];
                            if (product_list) {
                                featured = product_list;
                                products.forEach((item, index) => {
                                    var obj = Object.assign({ 'is_featured': false }, item._doc);
                                    featured.forEach((element) => {
                                        if (element.productid.toString() === item._id.toString()) {
                                            obj = Object.assign({ 'is_featured': true }, item._doc);
                                        }
                                    });
                                    newProductObj.push(obj);
                                });
                            } else {
                                products.forEach((item, index) => {
                                    var obj = Object.assign({ 'is_featured': false }, item._doc);
                                    newProductObj.push(obj);
                                });
                            }

                            return res.status(200).json({
                                status: true,
                                message: 'Products fetched successfully',
                                data: { 'products': newProductObj },
                            });
                        });
                    } else {
                        return res.status(200).json({
                            status: false,
                            message: 'Oops! No product found',
                        });
                    }
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! No product found',
                });
            }
        })
    });
};
// best seller 
exports.getBestSellerByCategorySubcategory = function(req, res) { 
    mongoose.connect(config.dbUrl, function (err) { 
        if (err) throw err;

        MappingTbl.find({ 
            subcatid: req.params.subcatid
        }, function (error, mapped_product) {
            if (mapped_product.length > 0) {
                let product_ids = mapped_product.map(obj => {
                    return obj.productid;
                });

                Product.find({
                    _id: { $in: product_ids },
                    status: 1
                }, function (err, products) {
                    if (products.length > 0) {
                        var bestseller = [];
                        // console.log("Products", products);
                        BestSeller.find({}, function (error, product_list) {
                            var newProductObj = [];
                            if (product_list) {
                                // console.log('productlist' + product_list);
                                // featured = product_list.productid;
                                bestseller = product_list;
                                products.forEach((item, index) => {
                                    var obj = Object.assign({ 'is_bestseller': false }, item._doc);
                                    bestseller.forEach((element) => {
                                        // console.log('elememnt', element);
                                        if (element.productid.toString() === item._id.toString()) {
                                            obj = Object.assign({ 'is_bestseller': true }, item._doc);
                                        }
                                    });
                                    newProductObj.push(obj);
                                });
                            } else {
                                products.forEach((item, index) => {
                                    var obj = Object.assign({ 'is_bestseller': false }, item._doc);
                                    newProductObj.push(obj);
                                });
                            }

                            return res.status(200).json({
                                status: true,
                                message: 'Products fetched successfully',
                                data: { 'products': newProductObj },
                            });
                        });
                    } else {
                        return res.status(200).json({
                            status: false,
                            message: 'Oops! No product found',
                        });
                    }
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! No product found',
                });
            }
        })
    });
};

// mostviewed
exports.getMostViewedByCategorySubcategory = function(req, res) { 
    mongoose.connect(config.dbUrl, function (err) { 
        if (err) throw err;

        MappingTbl.find({ 
            subcatid: req.params.subcatid
        }, function (error, mapped_product) {
            if (mapped_product.length > 0) {
                let product_ids = mapped_product.map(obj => {
                    return obj.productid;
                });

                Product.find({
                    _id: { $in: product_ids },
                    status: 1
                }, function (err, products) {
                    if (products.length > 0) {
                        var mostviewed = [];
                        // console.log("Products", products);
                        MostViewed.find({}, function (error, product_list) {
                            var newProductObj = [];
                            if (product_list) {
                                // console.log('productlist' + product_list);
                                // featured = product_list.productid;
                                mostviewed = product_list;
                                products.forEach((item, index) => {
                                    var obj = Object.assign({ 'is_mostviewed': false }, item._doc);
                                    mostviewed.forEach((element) => {
                                        // console.log('elememnt', element);
                                        if (element.productid.toString() === item._id.toString()) {
                                            obj = Object.assign({ 'is_mostviewed': true }, item._doc);
                                        }
                                    });
                                    newProductObj.push(obj);
                                });
                            } else {
                                products.forEach((item, index) => {
                                    var obj = Object.assign({ 'is_mostviewed': false }, item._doc);
                                    newProductObj.push(obj);
                                });
                            }

                            return res.status(200).json({
                                status: true,
                                message: 'Products fetched successfully',
                                data: { 'products': newProductObj },
                            });
                        });
                    } else {
                        return res.status(200).json({
                            status: false,
                            message: 'Oops! No product found',
                        });
                    }
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! No product found',
                });
            }
        })
    });
};

// onsale
exports.getOnSaleByCategorySubcategory = function(req, res) { 
    mongoose.connect(config.dbUrl, function (err) { 
        if (err) throw err;

        MappingTbl.find({ 
            subcatid: req.params.subcatid
        }, function (error, mapped_product) {
            if (mapped_product.length > 0) {
                let product_ids = mapped_product.map(obj => {
                    return obj.productid;
                });

                Product.find({
                    _id: { $in: product_ids },
                    status: 1
                }, function (err, products) {
                    if (products.length > 0) {
                        var onsale = [];
                        // console.log("Products", products);
                        OnSale.find({}, function (error, product_list) {
                            var newProductObj = [];
                            if (product_list) {
                                // console.log('productlist' + product_list);
                                // featured = product_list.productid;
                                onsale = product_list;
                                products.forEach((item, index) => {
                                    var obj = Object.assign({ 'is_onsale': false }, item._doc);
                                    onsale.forEach((element) => {
                                        // console.log('elememnt', element);
                                        if (element.productid.toString() === item._id.toString()) {
                                            obj = Object.assign({ 'is_onsale': true }, item._doc);
                                        }
                                    });
                                    newProductObj.push(obj);
                                });
                            } else {
                                products.forEach((item, index) => {
                                    var obj = Object.assign({ 'is_onsale': false }, item._doc);
                                    newProductObj.push(obj);
                                });
                            }

                            return res.status(200).json({
                                status: true,
                                message: 'Products fetched successfully',
                                data: { 'products': newProductObj },
                            });
                        });
                    } else {
                        return res.status(200).json({
                            status: false,
                            message: 'Oops! No product found',
                        });
                    }
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! No product found',
                });
            }
        })
    });
};
// New Arrival
exports.getNewArrivalByCategorySubcategory = function(req, res) { 
    mongoose.connect(config.dbUrl, function (err) { 
        if (err) throw err;

        MappingTbl.find({ 
            subcatid: req.params.subcatid
        }, function (error, mapped_product) {
            if (mapped_product.length > 0) {
                let product_ids = mapped_product.map(obj => {
                    return obj.productid;
                });

                Product.find({
                    _id: { $in: product_ids },
                    status: 1
                }, function (err, products) {
                    if (products.length > 0) {
                        var newarrivals = [];
                        // console.log("Products", products);
                        NewArrivals.find({}, function (error, product_list) {
                            var newProductObj = [];
                            if (product_list) {
                                // console.log('productlist' + product_list);
                                // featured = product_list.productid;
                                newarrivals = product_list;
                                products.forEach((item, index) => {
                                    var obj = Object.assign({ 'is_newarrival': false }, item._doc);
                                    newarrivals.forEach((element) => {
                                        // console.log('elememnt', element);
                                        if (element.productid.toString() === item._id.toString()) {
                                            obj = Object.assign({ 'is_newarrival': true }, item._doc);
                                        }
                                    });
                                    newProductObj.push(obj);
                                });
                            } else {
                                products.forEach((item, index) => {
                                    var obj = Object.assign({ 'is_newarrival': false }, item._doc);
                                    newProductObj.push(obj);
                                });
                            }

                            return res.status(200).json({
                                status: true,
                                message: 'Products fetched successfully',
                                data: { 'products': newProductObj },
                            });
                        });
                    } else {
                        return res.status(200).json({
                            status: false,
                            message: 'Oops! No product found',
                        });
                    }
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! No product found',
                });
            }
        })
    });
};