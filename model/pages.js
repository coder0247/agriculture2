const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const pagesSchema = new Schema({
  content: { type: String }, 
  pageslug: { type: String},
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
}, { collection: 'pages' });

const Pages = mongoose.model('Pages', pagesSchema);

module.exports = Pages;
