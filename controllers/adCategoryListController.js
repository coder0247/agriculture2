const mongoose = require('mongoose');
const config = require('../config');
const Category = require('../model/category');
const Subcategory = require('../model/subcategory');
const Form = require ('../model/form');
exports.categoryList = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
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
};

exports.subcategoryListByCategory = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
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
};

exports.deleteCategory = function (req , res) {
    mongoose.connect(config.dbUrl, function (err) {
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
};

exports.deleteSubcategory = function(req, res) {
    mongoose.connect(config.dbUrl, function (err) {
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
};

exports.addCategory = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) { 
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
};

exports.getActiveCategories = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
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
}

exports.getCategoryDetails = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
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
}

exports.updateCategoryDetails = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
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
}

exports.getSubCategoryDetails = function( req, res) {
    mongoose.connect(config.dbUrl, function (err) {
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
}

exports.updateSubCategoryDetails = function( req, res) {
    mongoose.connect(config.dbUrl, function (err) {
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
};
exports.addFormFields = function (req, res) {
    mongoose.connect(config.dbUrl, function( err ){
        if (err) throw err;
        // console.log('bodyparameter', req.body);
        var addnewform =  new Form;
        addnewform.subcatid = req.body.subcatid;
        addnewform.formname = req.body.formname;
        for ( var formfield = 0; formfield < req.body.form.length; formfield++) {
            addnewform.form.push(req.body.form[formfield]);
        }
        addnewform.save(function (err, nnnn) {
            return res.status(200).json({
                status: true,
                message: 'Form added successfully',
            });
        });
    });
}    
exports.updateFormFields = function (req, res) {
    mongoose.connect(config.dbUrl, function( err ){
        if (err) throw err;
        // console.log('bodyparameter', req.body);
        Form.findOneAndDelete({
            'subcatid': req.body.subcatid
        }, function (error, featured_subcategory) {
            var addnewform =  new Form;
            addnewform.subcatid = req.body.subcatid;
            addnewform.formname = req.body.formname;
            for ( var formfield = 0; formfield < req.body.form.length; formfield++) {
                addnewform.form.push(req.body.form[formfield]);
            }
            addnewform.save(function (err, nnnn) {
                return res.status(200).json({
                    status: true,
                    message: 'Update Form successfully',
                });
            });
        });
       
    });
}    
exports.addSubCategory = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
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
                    subcatid:  subcategory._id
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
}