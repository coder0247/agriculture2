const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const mmostviewedSchema = new Schema({
    productid: { type: Schema.Types.ObjectId, ref: 'Products' },
    created_at: { type: Date, default: Date.now() },
    status: { type: Boolean, default: true}
}, { collection: 'mmostviewed' });

const MostViewed = mongoose.model('MostViewed', mmostviewedSchema);

module.exports = MostViewed;
