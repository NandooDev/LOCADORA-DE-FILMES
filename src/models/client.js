const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    adress: {type: String, required: true},
    phone: {type: String, required: true},
    rental_history: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true}]
});

module.exports = mongoose.model('Client', clientSchema);