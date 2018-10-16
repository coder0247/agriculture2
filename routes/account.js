const express = require('express')
const app = express()
var accountController = require('../controllers/accountController');
app.get('/api/productsbyuser/:userid', accountController.productsByUser);
app.get('/api/setproductarchive/:pid', accountController.setProductArchive);
app.get('/api/archiveads/:userid', accountController.archiveAds);
app.get('/api/setproductactive/:pid', accountController.setProductActive);
app.get('/api/user/dashboard/:userid', accountController.userDashboard);
app.get('/api/amountunitlist', accountController.amountUnitList);
app.post('/api/updateproduct', accountController.updateProduct);
app.delete('/api/removeproduct/:product_id', accountController.removeProduct);
app.post('/api/inbox', accountController.inbox);
app.post('/api/sent', accountController.sent);
app.get('/api/inbox/:msgid', accountController.singleInbox);
app.get('/api/sent/:msgid', accountController.singleSent);
app.post('/api/addnewproduct', accountController.addNewProduct);
app.get('/api/getformfields/:subcatid', accountController.getformfields);
module.exports = app;