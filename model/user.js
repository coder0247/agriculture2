const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phonenumber: { type: String, required: true },
  password: { type: String, required: true },
  newsletter: { type: Boolean, default: false },
  is_admin: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  usercountrycode: { type: Schema.Types.ObjectId, ref: 'IntlCodes' },
  city:{ type: String, required: true },
  country:{ type: String, required: true },
  verified : { type: Boolean, default: false },
  verifcode: { type: String, required: false } ,
  resetcode: { type: String, required: false},
  active: { type: Boolean, default: true },
}, { collection: 'user' });

const User = mongoose.model('User', userSchema);

module.exports = User;
