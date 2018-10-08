const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const intlcodesSchema = new Schema({
    c_code: { type: String, required: true },
    c_phcode: { type: String, required: true},
    c_text: { type: String, required: true },
    c_fullname: { type: String, required: true },
}, { collection: 'intlcodes' });

const IntlCodes = mongoose.model('IntlCodes', intlcodesSchema);

module.exports = IntlCodes;
