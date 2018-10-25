const express = require('express')
const app = express()

var userController = require('../controllers/userController.js');
app.post('/api/user/signin', userController.sigin);
app.post('/api/user/register', userController.register);
app.get('/api/user/logout', userController.logout);
app.get('/api/user/details/:userid', userController.userDetails);
app.post('/api/user/resetuserpass', userController.restUserPassword);
app.post('/api/user/editprofile', userController.editProfile);
app.post('/api/user/forgotpass', userController.forgotpass);

module.exports = app;