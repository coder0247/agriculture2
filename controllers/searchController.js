const mongoose = require('mongoose');
const config = require('../config');
const MappingTbl = require('../model/mappingtbl');
const Product = require('../model/product');
exports.searchResult = function (req, res) {
    mongoose.connect(config.dbUrl, function (err) {
        if (err) throw err;
        MappingTbl.find({ subcatid: req.params.subCatId, regionid: req.params.regionId }, function (err, mappingfound) {
            if (mappingfound.length > 0) {
                var reformattedArray = mappingfound.map(obj => {
                    return obj.productid;
                });
                Product.find({
                    '_id': { $in: reformattedArray }, 'status': '1'
                }, function (err, searchresult) {
                    if (searchresult.length > 0) {
                        return res.status(200).json({
                            status: 'success',
                            data: { 'product': searchresult, 'mappindfound': reformattedArray }
                        });
                    } else {
                        return res.status(200).json({
                            status: 'fail',
                            data: { 'product': '', 'mappindfound': '' }
                        });
                    }
                });
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Fetch Failed'
                })
            }
        });
    });
};