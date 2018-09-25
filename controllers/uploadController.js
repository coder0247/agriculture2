const mongoose = require('mongoose');
const config = require('../config');
var cloudinary = require('cloudinary');
var multer = require('multer');
// MULTER CONFIGURATION
var storage = multer.diskStorage({
    filename: function(req, file, callback) {
      callback(null, Date.now() + file.originalname);
    }
  });
  var imageFilter = function (req, file, cb) {
      // accept image files only
      if (!file.originalname.match(/\.(jpg|jpeg)$/i)) {
          return cb(new Error('Only JPG/JPEG image files are allowed!'), false);
      }
      cb(null, true);
  };
  var upload = multer({ storage: storage, fileFilter: imageFilter}).single('file')
  // CLOUDINARY STATIC FILE HOSTING
  cloudinary.config({
    cloud_name: 'minati',
    api_key: '883321298325664',
    api_secret: 'dfywICECmWZen0RYCcQwEH5JxZY'
  });
exports.uploadProductImage = function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        cloudinary.uploader.upload(req.file.path, function(result) {
            res.json({ error_code: 0, err_desc: null, data: result.secure_url });
        });

    });
};