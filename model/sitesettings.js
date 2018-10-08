const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const sitesettingsSchema = new Schema({
    email: { type: String },
    phonenumber: { type: String },
    address: { type: String },
    footertext: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    pinterest: { type: String },
    instagram: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, { collection: 'sitesettings' });

const SiteSettings = mongoose.model('SiteSettings', sitesettingsSchema);

module.exports = SiteSettings;
