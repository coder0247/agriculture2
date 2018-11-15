const express = require('express')
const app = express()
const mid = require('../middleware');
var adUserController = require('../controllers/adUserController');
app.post('/api/admin/login', adUserController.login);
app.get('/api/admin/logout', adUserController.logout);
app.get('/api/adminauth', adUserController.adminAuth);
app.get('/api/admin/users', adUserController.userList);
app.get('/api/admin/category/:catid/active-subcategories', adUserController.activeSubCategoriesList);
app.get('/api/admin/category/:catid/subcategory/:subcatid/products', adUserController.getProductListByCategorySubcategory);
app.get('/api/admin/category/:catid/subcategory/:subcatid/bestsellerproducts', adUserController.getBestSellerByCategorySubcategory);
app.get('/api/admin/category/:catid/subcategory/:subcatid/newarrivalproducts', adUserController.getNewArrivalByCategorySubcategory);
app.get('/api/admin/category/:catid/subcategory/:subcatid/onsaleproducts', adUserController.getOnSaleByCategorySubcategory);
app.get('/api/admin/category/:catid/subcategory/:subcatid/mostviewedproducts', adUserController.getMostViewedByCategorySubcategory);
app.get('/api/admin/getuserdetails/:uid',adUserController.getUserDetails);
app.get('/api/admin/activateuser/:uid',adUserController.activateUser);
app.get('/api/admin/deactivateuser/:uid',adUserController.deactivateUser);
app.get('/api/admin/deleteuser/:uid',adUserController.deleteUser);

module.exports = app;