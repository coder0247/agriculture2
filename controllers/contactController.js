const mongoose = require('mongoose');
const config = require('../config');
const nodemailer = require('nodemailer');
const Contact = require('../model/contact');
exports.contact = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        var contactdetails = new Contact();
        contactdetails.fullname = req.body.fullname;
        contactdetails.email = req.body.email;
        contactdetails.phonenumber = req.body.phoneno;
        contactdetails.msg = req.body.msg;
        contactdetails.usercountrycode = req.body.countrycode;
        contactdetails.save(function (error) {
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
                        from: '"'+req.body.fullname+'" <'+req.body.email+'>', // sender address
                        to: config.mail.user, // list of receivers
                        subject: 'Contact us', // Subject line
                        text: '', // plain text body
                        html: '<table>'+
                        '<tr><td>Name</td>'+'<td>'+ req.body.fullname +'</td></tr>'+
                        '<tr><td>Email</td>'+'<td>'+ req.body.email +'</td></tr>'+
                        '<tr><td>Phone</td>'+'<td>'+ req.body.phoneno +'</td></tr>'+
                        '<tr><td>Message</td>'+'<td>'+ req.body.msg +'</td></tr>'+
                        '</table>'+
                        '<br><br><br><br><br>Your sincerely<br><br>Your AgriPata team'
                    };
                
                    // send mail with defined transport object
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log(error);
                        }
                        return res.status(200).json({
                            status: 'success',
                            data: {'msg': "We will contact you shortly." },
        
                        });
                        // console.log('Message sent: %s', info.messageId);
                        // // Preview only available when sending through an Ethereal account
                        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                    });
                });
               
            }
        });

    });
};