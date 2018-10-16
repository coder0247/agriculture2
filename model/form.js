const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create a schema
var fieldSchema = new Schema({
    _id: false,
     fieldname: String, 
     isrequired: Boolean 
    });
const formSchema = new Schema({
  subcatid: { type: String, required: true, unique: true },
  formname: { type: String, required: true },
  form: [fieldSchema],
}, { collection: 'form' });

const Form = mongoose.model('Form', formSchema);
module.exports = Form;
