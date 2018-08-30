const cors = require('cors');
const express = require('express')
var cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
const mongoose = require('mongoose');
const User = require('./model/user');
const Crop = require('./model/crop');
const Region = require('./model/region');
const Product = require('./model/product');
const MostViewed = require('./model/mostviewed');
const Category = require('./model/category');
const Subcategory = require('./model/subcategory');
const Amountunit = require('./model/amountunit');
const Msgs = require('./model/msg');
const Featured = require('./model/featured');
const Newsletter = require('./model/newsletter');
const Contact = require('./model/contact');
const MapProductCrop = require('./model/mapproductcrop');
const MappingTbl = require('./model/mappingtbl');
const bodyParser = require('body-parser')
var crypt = require("apache-crypt");
const path = require('path');
var multer = require('multer');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var dashdata = {
    activeadscount: 0,
    archiveadscount: 0,
    inboxnewmsg: 0,
};
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
const siteurl = 'https://previewagriculture.herokuapp.com';
const url = "mongodb://nemumba2018:nemumba2018@ds237072.mlab.com:37072/agriculture";
const DIR = './assets/images/products/';
//connect to MongoDB
var options = { keepAlive: 300000, connectTimeoutMS: 30000, useNewUrlParser: true};
mongoose.connect(url, options);
var db = mongoose.connection;
var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, DIR);
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});
let upload = multer({ storage: storage }).single('file');
app.use(session({
    key: 'user_sid',
    secret: 'TQnN$d#fsurwer87234897#@$$',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session) {
        next();
    } else {
        res.redirect(siteurl);
    }
};

app.post('/api/upload', function (req, res) {
    upload(req, res, function (err) {
        // console.log(req.file);
        if (err) {
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        res.json({ error_code: 0, err_desc: null, data: req.file });
    });

});

app.get('/api/user/logout', (req, res) => {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
               res.redirect(siteurl + 'user/login');
            } else {
                res.clearCookie('user_sid');
                return res.status(200).json({
                    success: true,
                    logout: true,
                    auth: false
                });
            }
        });
    }
});
app.get('/api/auth', (req, res) => {
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
});
app.get('/api/featuredlist', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;

        Featured.find({}).populate({ path: 'categoryid' }).populate({ path: 'subcatid' }).populate({ path: 'productid' }).exec(function (err, featured) {
            if (err) throw err;
            if (featured.length > 0) {
                console.log('Cookies: ', req.session.auth)
                return res.status(200).json({
                    status: 'success',
                    data: { 'featured': featured },
                    // auth : req.session.auth
                });

            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Fetch Failed',

                })
            }
        })
    });
});

app.get('/api/bestselllist/:limit', (req, res) => {
    var limit = req.params.limit || 7;
    limit = parseInt(limit);

    mongoose.connect(url, function (err) {
        if (err) throw err;

        const aggregatorOpts = [
            {
                "$group": {
                    "_id": { productid: "$productid", from: "$from" },
                    //"id": { $first: "$_id" },
                    "productid": { $first: "$productid" },
                    "sellerid": { $first: "$sellerid" },
                    //"count": { "$sum": 1 }
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
            //console.log(bestselllist);
            const populateOpts = [
                { path: 'productid' },
                { path: 'sellerid' }
            ]
            Msgs.populate(bestselllist, populateOpts, function (err, bestselllist) {
                //console.log(bestselllist);
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
});

app.get('/api/mostviewed/:limit', (req, res) => {
    var limit = req.params.limit || 7;
    limit = parseInt(limit);

    mongoose.connect(url, function (err) {
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

            //console.log(mostviewed);
            const populateOpts = [
                { path: 'productid' }
            ]
            MostViewed.populate(mostviewed, populateOpts, function (err, mostviewed) {
                //console.log(mostviewed);
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
});

app.post('/api/product/:productid/client/:clientip/viewed', (req, res) => {
    mongoose.connect(url, function (err) {
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
});

app.get('/api/newarrival/:limit', (req, res) => {
    var limit = req.params.limit || 7;
    limit = parseInt(limit);

    mongoose.connect(url, function (err) {
        if (err) throw err;

        const aggregatorOpts = [
            {
                "$sort": { "created_at": -1 }
            }
        ];

        Product.find({}).sort({ 'created_at': -1 }).limit(limit).exec(function (err, newarrival) {
            //console.log(newarrival);
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
});

app.post('/api/user/signin', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        User.find({
            email: req.body.email
        }, function (err, user) {
            if (err) throw err;
            if (user.length === 1 && user[0].password == crypt(req.body.password, user[0].password)) {
                loggedinuser = {
                    id: user[0]._id,
                    email: user[0].email,
                    firstname: user[0].firstname,
                    lastname: user[0].lastname,
                    is_admin: user[0].is_admin,
                };
                req.session.auth = true;
                req.session.is_admin = user[0].is_admin;
                return res.status(200).json({
                    status: 'success',
                    data: loggedinuser,
                    auth: true
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: user
                })
            }

        })
    });
});
app.get('/api/user/dashboard/:userid', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        dashdata.activeadscount =0;
        dashdata.archiveadscount =0;
        dashdata.inboxnewmsg = 0;
         // active ads
        MappingTbl.find({ userid: req.params.userid })
        .populate({ path: 'subcatid', populate : { path: 'catid', select: 'catname subcatname' }})
        .exec(function (err, mappingfound) {
            // console.log('mappingfound', mappingfound);
            if (mappingfound.length > 0) {
                // mappingfound[0].productid
                var reformattedArray = mappingfound.map(obj => {
                    return obj.productid;
                });
                Product.find({
                    '_id': { $in: reformattedArray }, 'status': '1'
                }, function (err, activeads) {
                    // console.log('activeads', activeads);
                    Product.find({
                        '_id': { $in: reformattedArray }, 'status': '0'
                    }, function (err, archiveads) {
                        dashdata.archiveadscount = archiveads.length;
                        
                    });
                    dashdata.activeadscount = activeads.length;
                    // console.log(dashdata);
                  
                    return res.status(200).json({
                        status: 'success',
                        data: dashdata
                    });
                });
               
            } 
            
        });
        // // archive ads
        // MappingTbl.find({ userid: req.params.userid }, function (err, mappingfound) {
        //     if (mappingfound.length > 0) {
        //         // mappingfound[0].productid
        //         var reformattedArray = mappingfound.map(obj => {
        //             return obj.productid;
        //         });
        //         Product.find({
        //             '_id': { $in: reformattedArray }, 'status': '0'
        //         }, function (err, archiveads) {
        //             dashdata.archiveadscount = archiveads.length;
        //         });
        //     } else {
        //         dashdata.archiveadscount = 0;
        //     }
        //     // console.log(dashdata);
        // });
        Msgs.find({ 'sellerid': req.params.userid , 'viewstatus' : false }, function (err, inbox) {
            if (err) throw err;
            if (inbox.length > 0) {
                dashdata.inboxnewmsg = inbox.length;
           } else {
            dashdata.inboxnewmsg =0;
            }
            // return res.status(200).json({
            //     status: 'success',
            //     data: dashdata
            // });
            // console.log(dashdata);
        })
        
        
    });
});
app.get('/api/newsletterSubs/:email', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        Newsletter.find({
            email: req.params.email
        }, function (err, subsdata) {
            if (err) throw err;
            if (subsdata.length) {
                // console.log(subsdata);
                return res.status(200).json({
                    status: 'success',
                    data: subsdata,
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: subsdata
                })
            }

        })
    });
});
	// 
    // subscribe
    app.post('/api/subscribe', (req, res) => {
        mongoose.connect(url, function (err) {
            if (err) throw err;
            var newsletter = new Newsletter();
            newsletter.email = req.body.email;
            newsletter.save(function (error, newsletter) {
                if (error) {
                    return res.status(200).json({
                        status: 'Failed',
                        data: { 'error': error },
    
                    });
                } else {
                    return res.status(200).json({
                        status: 'success',
                        data: {'msg': "Subscriped Successfully" },
    
                    });
                }
            });
    
        });
    });
    
app.post('/api/contact', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        var contactdetails = new Contact();
        contactdetails.fullname = req.body.fullname;
        contactdetails.email = req.body.email;
        contactdetails.phonenumber = req.body.phoneno;
        contactdetails.msg = req.body.msg;
        contactdetails.save(function (error, details) {
            if (error) {
                return res.status(200).json({
                    status: 'Failed',
                    data: { 'error': error },

                });
            } else {
                return res.status(200).json({
                    status: 'success',
                    data: {'msg': "We will contact you shortly." },

                });
            }
        });

    });
});
app.post('/api/user/register', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        var newUser = new User();
        newUser.firstname = req.body.firstname;
        newUser.lastname = req.body.lastname;
        newUser.phonenumber = req.body.phoneno;
        newUser.region = req.body.region;
        newUser.email = req.body.email;
        newUser.newsletter = !!req.body.newsletter;
        newUser.password = crypt(req.body.password);
        newUser.save(function (error, product) {
            if (error) {
                return res.status(200).json({
                    status: 'Failed',
                    data: { 'error': error },
                    dup : "The email address you have entered is already registered"

                });
            } else {
                return res.status(200).json({
                    status: 'success',
                    data: { 'error': false, 'msg': "Registered Successfully" },

                });
            }
        });

    });
});

app.post('/api/postmsg', (req, res) => {
    mongoose.connect(url, function (err) {
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
});
app.post('/api/updateproduct', function (req, res) {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        let productupdateinfo = {
            pname : req.body.productname,
            unitprice : req.body.unitprice,
            pimage : req.body.productimage,
            amtunit : req.body.amtunit,
            saleamount : req.body.saleamount
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
});
app.post('/api/addnewproduct', function (req, res) {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        var newProduct = new Product();
        newProduct.pname = req.body.productname;
        newProduct.unitprice = req.body.unitprice;
        newProduct.pimage = req.body.productimage;
        newProduct.amtunit = req.body.amtunit;
        newProduct.saleamount = req.body.saleamount;
        newProduct.status = "1";
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
                mappingtbl.regionid = req.body.region;
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
});

app.get('/api/subcatlist', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        Subcategory.find({}, function (err, subcats) {
            if (err) throw err;
            if (subcats.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'subcats': subcats },
                });

            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Fetch Failed',

                })
            }

        })
    });
});

app.get('/api/catlist', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        Category.find({}, function (err, category) {
            if (err) throw err;
            if (category.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'category': category },
                });

            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Fetch Failed',

                })
            }

        })
    });
});

app.get('/api/category/:catid/subcatlist', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        if (!!req.params.catid.match(/^[0-9a-fA-F]{24}$/) === false) {
            return res.status(200).json({
                status: 'Fail',
                msg: 'Fail',
                pagenotfound: true

            });
          }
        Subcategory.find({
            catid: req.params.catid
        }, function (err, subcategory) {
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
});
app.post('/api/testingremove', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;

        Featured.find({ }, function (error, featured_subcategory) {
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
});
app.delete('/api/removeproduct/:product_id', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        Product.findOneAndDelete({ _id: req.params.product_id },function (err) {
            if (err) throw err;
            MappingTbl.deleteOne({ productid: req.params.product_id }, function (err) {
                if (err) return handleError(err);
                MostViewed.deleteOne({ productid: req.params.product_id }, function (err) {
                    return res.status(200).json({
                        status: 'success',
                        data: { 'delete': 'delete successfully ' },
                    });
                });
                // deleted at most one tank document
              });
        });
       
    });
});
app.post('/api/inbox', (req, res) => {
    mongoose.connect(url, function (err) {
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
});

app.post('/api/sent', (req, res) => {
    mongoose.connect(url, function (err) {
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
});

app.get('/api/inbox/:msgid', (req, res) => {
    mongoose.connect(url, function (err) {
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
});

app.get('/api/sent/:msgid', (req, res) => {
    mongoose.connect(url, function (err) {
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
});

app.get('/api/sent', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        Subcategory.find({}, function (err, subcats) {
            if (err) throw err;
            if (subcats.length > 0) {
                return res.status(200).json({
                    status: 'success',
                    data: { 'subcats': subcats },
                });

            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Fetch Failed',

                })
            }

        })
    });
});

app.get('/api/setproductarchive/:pid', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        Product.findByIdAndUpdate({ _id: req.params.pid }, { $set: { status: '0' } }, function (err, archiveproduct) {
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

app.get('/api/amountunitlist', (req, res) => {
    mongoose.connect(url, function (err) {
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
});

app.get('/api/product/:id', sessionChecker, (req, res) => {
    mongoose.connect(url, function (err) {
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
});

app.get('/api/getsellerinfo/:productid', sessionChecker, (req, res) => {
    mongoose.connect(url, function (err) {
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
});

app.get('/api/regionlist', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        Region.find({}, function (err, region) {
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
});

app.get('/api/productlistbycat/:id', function (req, res) {
    //    return res.send(req.params);
    mongoose.connect(url, function (err) {
        if (err) throw err;

        if (!!req.params.id.match(/^[0-9a-fA-F]{24}$/) === false) {
            return res.status(200).json({
                status: 'Fail',
                msg: 'Fail',
                pagenotfound: true

            });
          }
            Subcategory.find({ 'catid': req.params.id }, function (err, subcatfound) {
                if (err) throw err;
                if (subcatfound.length > 0) {
                    //    productfound[0]._id  
                    var maproductarray = subcatfound.map(obj => {
                        return obj._id;
                    });
                    MappingTbl.find({ subcatid: { $in: maproductarray } }, function (err, mappingfound) {
                        if (mappingfound.length > 0) {
                            // mappingfound[0].productid
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
                            // Product.find({_id :  mappingfound[0].productid}, function(err, products){
                            //     return res.status(200).json({
                            //         status: 'success',
                            //         data: { 'product':products ,'mappindfound' : reformattedArray}
                            //     });
                            // });
                        } else {
                            return res.status(200).json({
                                status: 'fail',
                                message: 'Fetch Failed',
    
    
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
});

// app.get('/api/crop/:id', function (req, res) {
//     //    return res.send(req.params);
//     mongoose.connect(url, function (err) {
//         if (err) throw err;
//         Crop.find({ _id: req.params.id }, function (err, cropfound) {
//             if (err) throw err;
//             if (cropfound.length > 0) {
//                 //    productfound[0]._id  
//                 MapProductCrop.find({ cropid: cropfound[0]._id }, function (err, mappingfound) {
//                     if (mappingfound.length > 0) {
//                         // mappingfound[0].productid
//                         var reformattedArray = mappingfound.map(obj => {
//                             return obj.productid;
//                         });
//                         Product.find({
//                             '_id': { $in: reformattedArray }, 'status': '1'
//                         }, function (err, docs) {
//                             if (docs.length > 0) {
//                                 return res.status(200).json({
//                                     status: 'success',
//                                     data: { 'product': docs },

//                                 });
//                             } else {
//                                 return res.status(200).json({
//                                     status: 'Fail',
//                                     msg: 'Fail',

//                                 });
//                             }

//                         });
//                         // Product.find({_id :  mappingfound[0].productid}, function(err, products){
//                         //     return res.status(200).json({
//                         //         status: 'success',
//                         //         data: { 'product':products ,'mappindfound' : reformattedArray}
//                         //     });
//                         // });
//                     } else {
//                         return res.status(200).json({
//                             status: 'fail',
//                             message: 'Fetch Failed',

//                         })
//                     }

//                 });
//             } else {
//                 return res.status(200).json({
//                     status: 'fail',
//                     message: 'Fetch Failed',

//                 })
//             }

//         })
//     });
// });

app.get('/api/cropbyuser/:userid', function (req, res) {
    //    return res.send(req.params);
    mongoose.connect(url, function (err) {
        if (err) throw err;
        MappingTbl.find({ userid: req.params.userid })
        .populate({ path: 'subcatid', populate : { path: 'catid', select: 'catname subcatname' }})
        .exec(function (err, mappingfound) {
            if (mappingfound.length > 0) {
                // mappingfound[0].productid
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
});

app.get('/api/archiveads/:userid', function (req, res) {
    //    return res.send(req.params);
    mongoose.connect(url, function (err) {
        if (err) throw err;
        MappingTbl.find({ userid: req.params.userid }, function (err, mappingfound) {
            if (mappingfound.length > 0) {
                // mappingfound[0].productid
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
});

app.get('/api/setproductactive/:pid', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        Product.findByIdAndUpdate({ _id: req.params.pid }, { $set: { status: '1' } }, function (err, archiveproduct) {
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

app.get('/api/search/subcategory/:subCatId/region/:regionId', function (req, res) {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        MappingTbl.find({ subcatid: req.params.subCatId, regionid: req.params.regionId }, function (err, mappingfound) {
            if (mappingfound.length > 0) {
                // mappingfound[0].productid
                var reformattedArray = mappingfound.map(obj => {

                    return obj.productid;
                });
                Product.find({
                    '_id': { $in: reformattedArray }, 'status': '1'
                }, function (err, searchresult) {
                    if (searchresult.length > 0) {
                        return res.status(200).json({
                            status: 'success',
                            data: { 'product': searchresult, 'mappindfound': reformattedArray },

                        });
                    } else {
                        return res.status(200).json({
                            status: 'fail',
                            data: { 'product': '', 'mappindfound': '' },

                        });
                    }
                });
                // Product.find({_id :  mappingfound[0].productid}, function(err, products){
                //     return res.status(200).json({
                //         status: 'success',
                //         data: { 'product':products ,'mappindfound' : reformattedArray}
                //     });
                // });
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Fetch Failed',

                })
            }

        });
    });
});

/**
 * +============================================================================================+
 * |                                                                                            |
 * |                                ADMIN APIS STARTS FROM HERE                                 |
 * |                                                                                            |
 * +============================================================================================+
 */

var adminSessionChecker = (req, res, next) => {
    if (req.session.admin_auth) {
         next();
    } else {
    //    res.redirect('/api/admin/login');
            //   next(JSON.stringify({
            //     'status': true,
            //     'auth': false,
            //     'message': 'Not logged in.'
            // }));
    }
};
app.get('/api/adminauth', (req, res) => {
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
});
/**
 * Login Admin
 * 
 */
app.post('/api/admin/login', (req, res) => {
    mongoose.connect(url, function (err) {
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
});

/**
 * Logout Admin
 * 
 */
app.get('/api/admin/logout', (req, res) => {
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
});

/**
 * Fetch list of all categories
 * 
 */
app.get('/api/admin/categories',adminSessionChecker, (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;

        Category.find({
            is_deleted: false
        }, function (error, categories) {
            if (categories.length > 0) {
                return res.status(200).json({
                    status: true,
                    message: "Category fetched successfully",
                    data: { 'categories': categories },
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! No Categories found',
                })
            }
        })
    });
});

/**
 * Fetch list of all active categories
 * 
 */
app.get('/api/admin/active-categories', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;

        Category.find({
            status: 1,
            is_deleted: false
        }, function (error, categories) {
            if (categories.length > 0) {
                return res.status(200).json({
                    status: true,
                    message: "Category fetched successfully",
                    data: { 'categories': categories },
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! No Categories found',
                })
            }
        })
    });
});

/**
 * Add a category
 * 
 */
app.post('/api/admin/category', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
    
        var newCategory = new Category();
        newCategory.catname = req.body.catname;
        newCategory.status = req.body.status;
        newCategory.is_deleted = false;
        newCategory.save(function (error, category) {
            if (category) {
                return res.status(200).json({
                    status: true,
                    message: 'Category added successfully',
                    data: { 'category': category },
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! There was an error while saving the category',
                    errors: error.errors,
                });
            }
        });
    });
});

/**
 * Fetch a particular category details
 * 
 */
app.get('/api/admin/category/:catid', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;

        Category.find({
            '_id': req.params.catid
        }, function (error, category) {
            if (category.length > 0) {
                return res.status(200).json({
                    status: true,
                    message: "Category fetched successfully",
                    data: { 'category': category[0] },
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! Category details not found',
                })
            }
        })
    });
});

/**
 * Update a particular category details
 * 
 */
app.put('/api/admin/category/:catid', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;

        var data = {
            catname: req.body.catname,
            status: req.body.status,
        };
        Category.findByIdAndUpdate({ _id: req.params.catid }, { $set: data }, function (error, category) {
            if (category) {
                return res.status(200).json({
                    status: true,
                    message: 'Category updated successfully',
                    data: { 'category': category },
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! There was an error while updating the category',
                    errors: error.errors,
                });
            }
        });
    });
});

/**
 * Delete a particular category
 * 
 */
app.delete('/api/admin/category/:catid', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;

        var data = {
            is_deleted: true
        };
        Category.findByIdAndUpdate({ _id: req.params.catid }, { $set: data }, function (error, category) {
            if (category) {
                return res.status(200).json({
                    status: true,
                    message: 'Category deleted successfully',
                    data: { 'category': category },
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! There was an error while deleting the category',
                    errors: error.errors,
                });
            }
        });
    });
});

/**
 * Fetch list of all sub-categories of a particular category
 * 
 */
app.get('/api/admin/category/:catid/subcategories', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;

        Subcategory.find({
            catid: req.params.catid,
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
});

/**
 * Fetch list of all active sub-categories of a particular category
 * 
 */
app.get('/api/admin/category/:catid/active-subcategories', sessionChecker, (req, res) => {
    mongoose.connect(url, function (err) {
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
});

/**
 * Add a subcategory
 * 
 */
app.post('/api/admin/subcategory', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;

        var newSubcategory = new Subcategory();
        newSubcategory.catid = req.body.catid;
        newSubcategory.subcatname = req.body.subcatname;
        newSubcategory.status = req.body.status;
        newSubcategory.is_deleted = false;
        newSubcategory.defaultimage = req.body.defaultimage;
        newSubcategory.save(function (error, subcategory) {
            if (subcategory) {
                return res.status(200).json({
                    status: true,
                    message: 'Subategory added successfully',
                    data: { 'subcategory': subcategory },
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! There was an error while saving the subcategory',
                    errors: error.errors,
                });
            }
        });
    });
});

/**
 * Fetch a particular subcategory details
 * 
 */
app.get('/api/admin/subcategory/:subcatid', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        Subcategory.find({
            '_id': req.params.subcatid
        }).populate({ path: 'catid', select: 'catname' }).exec(function (error, subcategory) {
            if (subcategory.length > 0) {
                return res.status(200).json({
                    status: true,
                    message: "Subcategory fetched successfully",
                    data: { 'subcategory': subcategory[0] },
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! Subcategory details not found',
                })
            }
        })
    });
});

/**
 * Update a particular subcategory details
 * 
 */
app.put('/api/admin/subcategory/:subcatid', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
    
        let data = {
            catid: req.body.catid,
            subcatname: req.body.subcatname,
            status: req.body.status,
            defaultimage: req.body.defaultimage
        };
        // console.log(data);
        Subcategory.findByIdAndUpdate({ _id: req.params.subcatid }, { $set: data }, function (error, subcategory) {
            if (subcategory) {
                return res.status(200).json({
                    status: true,
                    message: 'Subcategory updated successfully',
                    data: { 'subcategory': subcategory },
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! There was an error while updating the subcategory',
                    errors: error.errors,
                });
            }
        });
    });
});

/**
 * Delete a particular subcategory
 * 
 */
app.delete('/api/admin/subcategory/:subcatid', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;

        var data = {
            is_deleted: true
        };
        Subcategory.findByIdAndUpdate({ _id: req.params.subcatid }, { $set: data }, function (error, subcategory) {
            if (subcategory) {
                return res.status(200).json({
                    status: true,
                    message: 'Subcategory deleted successfully',
                    data: { 'subcategory': subcategory },
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Oops! There was an error while deleting the subcategory',
                    errors: error.errors,
                });
            }
        });
    });
});

/**
 * Fetch list of all products of a particular sub-category
 * 
 */
app.get('/api/admin/category/:catid/subcategory/:subcatid/products', (req, res) => {
    mongoose.connect(url, function (err) {
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

                        Featured.findOne({
                            subcatid: req.params.subcatid
                        }, function (error, product_list) {
                            var newProductObj = [];
                            if (product_list) {
                                featured = product_list.productid;
                                products.forEach((item, index) => {
                                    var obj = Object.assign({ 'is_featured': false }, item._doc);
                                    featured.forEach((element) => {
                                        if (element.toString() === item._id.toString()) {
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
});

/**
 * Make product featured
 * 
 */
// /api/admin/categoryid/5b56cd9ecb50b83ff77b5168/subcategory/5b6049d110bf2f5125647364/product/5b72bfaf4f5f191b50430e40/featured
app.post('/api/admin/categoryid/:categoryid/subcategory/:subcatid/product/:productid/featured', (req, res) => {
    mongoose.connect(url, function (err) {
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
});

/**
 * Make product unfeatured
 * 
 */
app.post('/api/admin/subcategory/:subcatid/product/:productid/unfeatured', (req, res) => {
    mongoose.connect(url, function (err) {
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
});

/**
 * Fetch list of all users
 * 
 */
app.get('/api/admin/users', (req, res) => {
    mongoose.connect(url, function (err) {
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
});

app.listen(process.env.PORT || 4001)
