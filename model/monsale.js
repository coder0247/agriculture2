const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const monsaleSchema = new Schema({
    productid: { type: Schema.Types.ObjectId, ref: 'Products' },
}, { collection: 'monsale' });

const OnSale = mongoose.model('OnSale', monsaleSchema);

module.exports = OnSale;
