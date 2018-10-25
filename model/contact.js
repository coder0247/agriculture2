const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const contactSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: false },
  phonenumber: { type: String, required: true },
  usercountrycode: { type: Schema.Types.ObjectId, ref: 'IntlCodes' },
  msg: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
}, { collection: 'contact' });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
