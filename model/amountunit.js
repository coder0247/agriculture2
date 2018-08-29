const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const amountunitSchema = new Schema({
    amountunit: { type: String},
}, { collection : 'amountunit' });

const AmountUnit = mongoose.model('AmountUnit', amountunitSchema);

module.exports = AmountUnit;
