// Assuming this is your model/UserData.js file
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  password: { type: String, required: true }
}, { collection: 'userdatas' }); // Specify the collection name explicitly

module.exports = mongoose.model('userdata', userDataSchema);
