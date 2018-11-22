const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const sliderSchema = new Schema({
  title: { type: String, required: false },
  subtitle: { type: String, required: false },
  smalltext: { type: String, required: false },
  buttontext: { type: String, required: false },
  buttonurl: { type: String, required: false },
  sliderimage: { type: String, required: false }
}, { collection: 'slider' });

const Slider = mongoose.model('Slider', sliderSchema);

module.exports = Slider;
