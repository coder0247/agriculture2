const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const featuredSchema = new Schema({
    categoryid: { type: Schema.Types.ObjectId, ref: 'Category' },
    subcatid: { type: Schema.Types.ObjectId, ref: 'Subcategory' },
    productid: [{ type: Schema.Types.ObjectId, ref: 'Products' }],
}, { collection: 'featured' });

const Featured = mongoose.model('Featured', featuredSchema);

module.exports = Featured;
