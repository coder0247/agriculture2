const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const maproductcropSchema = new Schema({
  cropid: { type: String },
  productid: { type: String },
  regionid: { type: String },
  userid : { type: String },
}, { collection : 'mapProductCrop' });

const MapProductCrop = mongoose.model('mapProductCrop', maproductcropSchema);

module.exports = MapProductCrop;
