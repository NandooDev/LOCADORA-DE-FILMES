const RentalHistory = require('../models/rentalHistory');
const Movie = require('../models/movie');
const mongoose = require('mongoose');

// Create RentalHistory

exports.createRentalHistory = async (req, res) => {
    try {
        const movieId = new mongoose.Types.ObjectId(req.body.rental_film);
        const film = await Movie.findById(movieId);
        if (film.disponible_copies > 0) {
            const rentalHistory = await RentalHistory.insertMany(req.body);
            await Movie.findByIdAndUpdate(movieId, 
                { $inc: { disponible_copies: -1 }}, { new: true }
            );
            res.status(200).json({ Status: "OK", Message: "Item adcionado no histórico de aluguel com sucesso", Infos: rentalHistory });
        } else {
            res.status(200).json({ Status: "Failed", Message: "Sem cópia disponível" });
        }
    } catch (err) {
        res.status(404).json({ 
            Status: "Error", Message: "Erro ao adcionar item no histórico de aluguel, por favor tente novamente", Error: err.message 
        });
    };
};

// Update RentalHistory 

exports.updateRentalHistory = async (req, res) => {
    try {
        const rentalHistory = await RentalHistory.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({ Status: "OK", Message: "Item no histórico de aluguel atualizado com sucesso", Infos: rentalHistory });
    } catch (err) {
        res.status(404).json({ 
            Status: "Error", Message: "Erro ao atualizar item no histórico de aluguel, por favor tente novamente", Error: err.message 
        });
    };
};

// Delete RentalHistory

exports.deleteRentalHistory = async (req, res) => {
    try {
        const rentalHistory = await RentalHistory.findByIdAndDelete(req.params.id);
        res.status(200).json({ Status: "OK", Message: "Histórico de aluguel deletado com sucesso" });
    } catch (err) {
        res.status(404).json({ 
            Status: "Error", Message: "Erro ao deletar histórico de aluguel, por favor tente novamente", Error: err.message 
        });
    };
};

// Find RentalHistory

exports.findRentalHistory = async (req, res) => {
    try {
        const rentalHistory = await RentalHistory.find().populate('client').populate('rental_film');
        res.status(200).json({ Status: "OK", Message: "Itens no histórico de aluguel encontrados com sucesso", Infos: rentalHistory });
    } catch (err) {
        res.status(404).json({ 
            Status: "Error", Message: "Erro ao procurar itens no histórico de aluguel, por favor tente novamente", Error: err.message 
        });
    };
};