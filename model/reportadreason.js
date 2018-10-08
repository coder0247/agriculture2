const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const reportreasonSchema = new Schema({
    reason: { type: String, required: true }
}, { collection: 'reportreason' });

const ReportReason = mongoose.model('ReportReason', reportreasonSchema);

module.exports = ReportReason;
