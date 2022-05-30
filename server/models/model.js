const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    capital: {
        type:String,
        required: true
    },
    status: {
        type: String,
        required:true
    }
})

const Countrydb = mongoose.model('Countrydb', schema);

module.exports = Countrydb;