const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const mbestsellerSchema = new Schema({
    productid: { type: Schema.Types.ObjectId, ref: 'Products' },
    created_at: { type: Date, default: Date.now() },
    status: { type: Boolean, default: true}
}, { collection: 'mbestseller' });

const MbestSeller = mongoose.model('MbestSeller', mbestsellerSchema);

module.exports = MbestSeller;
