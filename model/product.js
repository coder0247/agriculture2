const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const productSchema = new Schema({
    pname: { type: String, required: true },
    unitprice: { type: String },
    pimage: { type: String },
    amtunit: { type: String },
    saleamount: { type: String },
    status: { type: String, default: "1" },
    created_at: { type: Date, default: Date.now() }
}, { collection: 'products' });

const Product = mongoose.model('Products', productSchema);

module.exports = Product;
