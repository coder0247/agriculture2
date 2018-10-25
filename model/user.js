const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phonenumber: { type: String, required: true },
  region: { type: String, required: true },
  password: { type: String, required: true },
  newsletter: { type: Boolean, default: false },
  is_admin: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  usercountrycode: { type: Schema.Types.ObjectId, ref: 'IntlCodes' },
}, { collection: 'user' });

const User = mongoose.model('User', userSchema);

module.exports = User;
