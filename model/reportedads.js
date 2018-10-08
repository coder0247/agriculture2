const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const reportedadsSchema = new Schema({
  adid: { type: Number, required: true},
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: false },
  phonenumber: { type: String, required: true },
  reportadregion: { type: Schema.Types.ObjectId, ref: 'IntlCodes' },
  reportreason: { type: Schema.Types.ObjectId, ref: 'ReportReason' },
  msg: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  viewstatus: { Boolean, default: false }
}, { collection: 'reportedads' });

const ReportedAds = mongoose.model('ReportedAds', reportedadsSchema);

module.exports = ReportedAds;
