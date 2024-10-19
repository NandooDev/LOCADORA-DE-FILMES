const mongoose = require("mongoose");

const rentalHistorySchema = new mongoose.Schema({
    rental_film: {type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true},
    client: {type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true},
    withdrawal_date: {type: Date, required: true},
    return_date: {type: Date, required: true}
});

module.exports = mongoose.model('Rental_History', rentalHistorySchema);