const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    year: {type: Number, required: true},
    genre: [{type: String, required: true}],
    director: {type: String, required: true},
    age_range: {type: Number, required: true},
    disponible_copies: {type: Number, required: true},
    total_copies: {type: Number, required: true},
    rental_price: {type: Number, required: true}
});

module.exports = mongoose.model('Movie', movieSchema);