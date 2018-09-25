const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const regionSchema = new Schema({
  regionname: { type: String, required: true }
}, { collection : 'regions' });

const Region = mongoose.model('Regions', regionSchema);

module.exports = Region;
