const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const categorySchema = new Schema({
  id: { type: String, required: false, unique: true },
  catname: { type: String, required: true },
  status: { type: Number, default: 1 },
  is_deleted: { Boolean, default: false }
}, { collection: 'category' });

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
