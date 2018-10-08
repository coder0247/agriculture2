const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const mnewarrivalsSchema = new Schema({
    productid: { type: Schema.Types.ObjectId, ref: 'Products' },
}, { collection: 'mnewarrivals' });

const NewArrivals = mongoose.model('NewArrivals', mnewarrivalsSchema);

module.exports = NewArrivals;
