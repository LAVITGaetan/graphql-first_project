const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    code: {
        type:String,
        required: true
    }
})

const Continentdb = mongoose.model('Continentdb', schema);

module.exports = Continentdb;