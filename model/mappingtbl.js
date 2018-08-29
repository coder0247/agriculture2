const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const mappingtblSchema = new Schema({
  subcatid: { type: Schema.Types.ObjectId, ref: 'Subcategory' },
  productid: { type: Schema.Types.ObjectId},
  regionid: { type: Schema.Types.ObjectId },
  userid : { type: Schema.Types.ObjectId },
}, { collection : 'mappingtbl' });

const MappingTbl = mongoose.model('MappingTbl', mappingtblSchema);

module.exports = MappingTbl;
