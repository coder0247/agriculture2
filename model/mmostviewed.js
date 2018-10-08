const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const mmostviewedSchema = new Schema({
    productid: { type: Schema.Types.ObjectId, ref: 'Products' },
}, { collection: 'mmostviewed' });

const MostViewed = mongoose.model('MostViewed', mmostviewedSchema);

module.exports = MostViewed;
