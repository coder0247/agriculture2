const User = require('../model/user');
var crypt = require("apache-crypt");
var generator = require('generate-password');
const mongoose = require('mongoose');
const config = require('../config');
const nodemailer = require('nodemailer');
const uuidv5 = require('uuid/v5');
const Newsletter = require('../model/newsletter');
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
            email: req.body.email, verified : true, active: true
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
        newUser.email = req.body.email;
        newUser.newsletter = !!req.body.newsletter;
        newUser.usercountrycode = req.body.countrycode;
        newUser.country = req.body.country;
        newUser.city = req.body.city;
        newUser.password = crypt(req.body.password);
        newUser.resetcode='';

        newUser.save(function (error, register) {
            if (error) {
                return res.status(200).json({
                    status: 'Failed',
                    data: { 'error': error },
                    dup : "The email address you have entered is already registered",
                    body: req.body

                });
            } else {
                const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
                var verificationcode = uuidv5(req.body.email, MY_NAMESPACE);
                let vcode = {
                    verifcode: verificationcode,
                };
                // User.findByIdAndUpdate({ _id : register._id }, { $set: vcode }, function (error, verificationcode) {
                //     return res.status(200).json({
                //         status: 'success',
                //         data: { 'error': false, 'msg': "Registered Successfully" },
                //     });
                // });
                // console.log('verificationcode', verificationcode);
                nodemailer.createTestAccount((err, account) => {
                    // create reusable transporter object using the default SMTP transport
                    let transporter = nodemailer.createTransport({
                        host: config.mail.host,
                        port: config.mail.port,
                        secure: config.mail.secure, // true for 465, false for other ports
                        auth: {
                            user: config.mail.user, // generated ethereal user
                            pass: config.mail.pass // generated ethereal password
                        }
                    });

                    // setup email data with unicode symbols
                    let mailOptions = {
                        from: '"AgriPata" <'+config.mail.user+'>', // sender address
                        to: req.body.email, // list of receivers
                        subject: 'AgriPata - Email Verification', // Subject line
                        text: '', // plain text body
                        html: 'Dear ' + req.body.firstname + '<br><br>' +
                       'thank you for your registration at AgriPata with the following data<br><br><br>' +
                       'To complete your registration at AgriPata please follow this link:<br><br>'+

                        config.siteUrl+'verify/'+ verificationcode +'<br>'+

                        'Your sincerely<br><br>Your AgriPata team'
                    };

                    // send mail with defined transport object
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log(error);
                        }

                        User.findByIdAndUpdate({ _id : register._id }, { $set: vcode }, function (error, verificationcode) {
                            return res.status(200).json({
                                status: 'success',
                                data: { 'error': false, 'msg': "Registered Successfully" },
                            });
                        });
                    });
                });

            } //else
        });

    });
};
exports.verify = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        User.find({'verifcode' : req.params.msgid}, '_id firstname', function (err, userdetails) {
            if (err) throw err;
            if (userdetails.length > 0) {
                let verifiedstatus = {
                    verified: true,
                };
                User.findByIdAndUpdate({ _id : userdetails[0]._id }, { $set: verifiedstatus }, function (error, verificationcode) {
                    return res.status(200).json({
                        status: 'success',
                        data: 'verification successfull' ,
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

exports.nwverify = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        Newsletter.find({'verifcode' : req.params.nwcode}, function (err, nwdetails) {
            if (err) throw err;
            if (nwdetails.length > 0) {
                let verifiedstatus = {
                    verified: true,
                };
                Newsletter.findByIdAndUpdate({ _id : nwdetails[0]._id }, { $set: verifiedstatus }, function (error, verificationcode) {
                    return res.status(200).json({
                        status: 'success',
                        data: 'verification successfull' ,
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
exports.userDetails = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        User.find({'_id' : req.params.userid}, 'firstname lastname phonenumber email region usercountrycode', function (err, userdetails) {
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
exports.forgotpass = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ee1f3341';
        var resetcode = uuidv5(req.body.email, MY_NAMESPACE);
        let vcode = {
            resetcode: resetcode,
        };
        User.find({'email' : req.body.email}, function (err, userdetails) {
            if (err) throw err;
            if (userdetails.length > 0) {

                    nodemailer.createTestAccount((err, account) => {
                        // create reusable transporter object using the default SMTP transport
                        let transporter = nodemailer.createTransport({
                            host: config.mail.host,
                            port: config.mail.port,
                            secure: config.mail.secure, // true for 465, false for other ports
                            auth: {
                                user: config.mail.user, // generated ethereal user
                                pass: config.mail.pass // generated ethereal password
                            }
                        });


                        // setup email data with unicode symbols
                        let mailOptions = {
                            from: '"AgriPata" <'+config.mail.user+'>', // sender address
                            to: req.body.email, // list of receivers
                            subject: 'Forgot Password', // Subject line
                            text: '', // plain text body
                             html:  'Dear ' + userdetails[0].firstname + '<br><br>'+
                             'Please click on the following link and create a new password afterwards' +'<br><br><br><br>' +
                              config.siteUrl+'reset/password/'+ resetcode +'<br><br><br><br>'+
                             'Your sincerely<br><br>Your AgriPata team'
                        };

                        // send mail with defined transport object
                        transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                                return console.log(error);
                            }
                            User.findByIdAndUpdate({ _id : userdetails[0]._id }, { $set: vcode }, function (error, verificationcode) {
                              return res.status(200).json({
                                  status: 'success',
                                  data: 'Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.'
                              });
                            });
                            // console.log('Message sent: %s', info.messageId);
                            // Preview only available when sending through an Ethereal account
                            // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                        });
                    });

                // });

            } else {
                return res.status(200).json({
                    status: 'fail',
                    data: 'Email is not registered with us.',

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
exports.restPasswordEmailink = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        // console.log( req.body);
        User.find({'resetcode' : req.body.resetcode}, function (err, userdetails) {
            if (err) throw err;
            if (userdetails.length > 0 ) {

                let newpassword = {
                    password: crypt(req.body.password),
                    resetcode: ''
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
                    data: 'Invalid url',

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
            region: req.body.region,
            usercountrycode: req.body.countrycode
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
