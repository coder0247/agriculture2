const express = require('express')
const app = express()
const mid = require('../middleware');
var adCategoryListController = require('../controllers/adCategoryListController');
app.get('/api/admin/categories', mid.adminSessionChecker, adCategoryListController.categoryList);
app.get('/api/admin/category/:catid/subcategories', adCategoryListController.subcategoryListByCategory);
app.delete('/api/admin/category/:catid', adCategoryListController.deleteCategory);
app.delete('/api/admin/subcategory/:subcatid', adCategoryListController.deleteSubcategory);
app.post('/api/admin/category', adCategoryListController.addCategory);
app.get('/api/admin/active-categories', adCategoryListController.getActiveCategories);
app.get('/api/admin/category/:catid', adCategoryListController.getCategoryDetails);
app.put('/api/admin/category/:catid', adCategoryListController.updateCategoryDetails);
app.get('/api/admin/subcategory/:subcatid', adCategoryListController.getSubCategoryDetails);
app.put('/api/admin/subcategory/:subcatid', adCategoryListController.updateSubCategoryDetails);
app.post('/api/admin/subcategory', adCategoryListController.addSubCategory);
app.post('/api/admin/addformfields', adCategoryListController.addFormFields);
app.post('/api/admin/updateformfield', adCategoryListController.updateFormFields);
app.post('/api/admin/addnewslider', adCategoryListController.addNewSlider);
app.get('/api/admin/slideritems', adCategoryListController.getslideritems);
app.delete('/api/admin/slider/:sliderid', adCategoryListController.deleteslider);

module.exports = app;