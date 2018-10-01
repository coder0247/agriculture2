const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment-fix');
const config = require('../config');
var connection = mongoose.createConnection(config.dbUrl);
autoIncrement.initialize(connection);
// create a schema
const testSchema = new Schema({
  fullname: { type: String, required: true },
  addressid: { type: Number, required: true, unique: true }
}, { collection: 'test' });

const Test = mongoose.model('Test', testSchema);
testSchema.plugin(autoIncrement.plugin, {
    model: 'Test',
    field: 'addressid',
    startAt: 1111,
    incrementBy: 1
});
module.exports = Test;
