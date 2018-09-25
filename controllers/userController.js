const User = require('../model/user');
var crypt = require("apache-crypt");
const mongoose = require('mongoose');
const config = require('../config');
exports.logout = function (req, res) {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
               res.redirect(config.siteUrl + 'user/login');
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
};

exports.sigin = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
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
};

exports.register = function (req, res ) {
    mongoose.connect(config.dbUrl, function (err) {
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
};

exports.userDetails = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        User.find({'_id' : req.params.userid}, 'firstname lastname phonenumber email region', function (err, userdetails) {
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

exports.restUserPassword = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        // console.log( req.body);
        User.find({'email' : req.body.email}, function (err, userdetails) {
            if (err) throw err;
            if (userdetails.length > 0  && userdetails[0].password == crypt(req.body.currentpassword, userdetails[0].password)) {
                
                let newpassword = {
                    password: crypt(req.body.password),
                };
                User.findByIdAndUpdate({ _id : userdetails[0]._id }, { $set: newpassword }, function (error, passwordreset) {
                    if (req.session) {
                        // delete session object
                        req.session.destroy(function (err) {
                                res.clearCookie('user_sid');
                        });
                    }
                    return res.status(200).json({
                        status: 'success',
                        data: 'Password updated successfully'
                    });
                });

            } else {
                return res.status(200).json({
                    status: 'fail',
                    data: 'Invalid Email/Password',

                })
            }

        })
    });
};

exports.editProfile = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        let setprofiledata = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phonenumber: req.body.phoneno,
            email: req.body.email,
            region: req.body.region
        };
        User.findByIdAndUpdate({ _id : req.body.userid }, { $set: setprofiledata }, function (error, profileupdated) {
            return res.status(200).json({
                status: true,
                message: {'profile' : 'profile updated successfully' }, 
                extra: profileupdated
            });
        });
    });
};

