const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const cropSchema = new Schema({
  id: { type: String, required: true, unique: false },
  catid: { type: Schema.Types.ObjectId, ref: 'Category'  },
  cropname: { type: String, required: true }
}, { collection : 'crops' });

const Crop = mongoose.model('Crops', cropSchema);

module.exports = Crop;
