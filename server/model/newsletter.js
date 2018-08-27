const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const newsletterSchema = new Schema({
  email: { type: String, required: true, unique: true },
  created_at: { type: Date, default: Date.now }
}, { collection: 'newsletter' });

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = Newsletter;
