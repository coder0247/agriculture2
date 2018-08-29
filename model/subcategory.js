const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const subcategorySchema = new Schema({
  catid: { type: Schema.Types.ObjectId, ref: 'Category' },
  subcatname: { type: String, required: true },
  defaultimage: { type: String},
  status: { type: Number, default: 1 },
  is_deleted: { Boolean, default: false }
}, { collection: 'subcategory' });

const Subcategory = mongoose.model('Subcategory', subcategorySchema);

module.exports = Subcategory;
