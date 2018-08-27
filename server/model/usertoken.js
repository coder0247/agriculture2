const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userTokenSchema = new Schema({
  userid: { type: String, required: true, unique: true },
  token: { type: String, required: true },
}, { collection : 'usertoken' });

const UserToken = mongoose.model('UserToken', userTokenSchema);

module.exports = UserToken;
