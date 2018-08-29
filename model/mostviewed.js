const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const mostviewedSchema = new Schema({
    client_ip: { type: String },
    productid: { type: Schema.Types.ObjectId, ref: 'Products' },
    created_at: { type: Date, default: Date.now() }
}, { collection: 'mostViewed' });

const MostViewed = mongoose.model('MostViewed', mostviewedSchema);

module.exports = MostViewed;
