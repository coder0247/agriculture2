const mongoose = require('mongoose');
const config = require('../config');
const Newsletter = require('../model/newsletter');

const nodemailer = require('nodemailer');
const uuidv5 = require('uuid/v5');

exports.newsletterSubs = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        Newsletter.find({
            email: req.params.email
        }, function (err, subsdata) {
            if (err) throw err;
            if (subsdata.length) {
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
};

exports.subscribe = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;

        const MY_NAMESPACE = '5c591a51-10e9-947f-58c4-ae84ec7d8872';
        var verificationcode = uuidv5(req.body.email, MY_NAMESPACE);
        
        var newsletter = new Newsletter();
        newsletter.email = req.body.email;
        newsletter.verifcode = verificationcode;
        newsletter.save(function (error) {
            if (error) {
                return res.status(200).json({
                    status: 'Failed',
                    data: { 'error': error }
                });
            } else {
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
                        from: '"AgriPata" <support@agripata.com>', // sender address
                        to: req.body.email, // list of receivers
                        subject: 'AgriPata - Email Subscription', // Subject line
                        text: '', // plain text body
                        html: 'Dear Agripata user,' + '<br>' +
                       'thank you for your interest in AgriPata and for subscribing to the newsletter!<br>' +
                       'To complete your registration at AgriPata please follow this link:'+
                        '<a href="'+config.siteUrl+'newsletter/verify/'+ verificationcode+'" target="_blank"> Confirm newsletter registration now</a>'
                        +'<br>'+
                        ' If you didn\'t register this e-mail address for the newsletter, please ignore this e-mail and you won\'t receive newsletters from us.' + '<br>' +
                        'Your sincerely<br>Your AgriPata team'
                    };
                
                    // send mail with defined transport object
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log(error);
                        }
                        return res.status(200).json({
                            status: 'success',
                            data: {'msg': "Subscribed Successfully" },
        
                        });
                    });
                });
               
            }
        });

    });
};