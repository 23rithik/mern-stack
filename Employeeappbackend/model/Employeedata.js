const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mailid: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please fill a valid phone number'] // Adjust the regex as per your phone number format
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Employeedata = mongoose.model('Employeedata', employeeSchema);

module.exports = Employeedata;
