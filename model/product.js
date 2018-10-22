const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment-fix');
const config = require('../config');
var connection = mongoose.createConnection(config.dbUrl);
autoIncrement.initialize(connection);
// create a schema
const productSchema = new Schema({
    pname: { type: String },
    pdesc: { type: String },
    adid: { type: Number, required: true, unique: false },
    unitprice: { type: String },
    pimage: { type: String },
    amtunit: { type: String },
    saleamount: { type: String },
    currencytype: { type: String },
    negotiable : { type: Boolean, default: false},
    status: { type: String, default: "1" },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }
}, { collection: 'products' });

const Product = mongoose.model('Products', productSchema);
productSchema.plugin(autoIncrement.plugin, {
    model: Product,
    field: 'adid',
    startAt: 1163,
    incrementBy: 1
});
module.exports = Product;
