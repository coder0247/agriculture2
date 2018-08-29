const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const msgsSchema = new Schema({
    from: { type: Schema.Types.ObjectId, ref: 'User' },
    comment: { type: String },
    sellerid: { type: Schema.Types.ObjectId, ref: 'User' },
    productid: { type: Schema.Types.ObjectId, ref: 'Products' },
    created_at: { type: Date, default: Date.now() },
    status: { type: Number, default: 1 },
    viewstatus: { Boolean, default: false }
}, { collection: 'msgs' });

const Msgs = mongoose.model('Msgs', msgsSchema);

module.exports = Msgs;

