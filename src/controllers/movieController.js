const Movie = require('../models/movie');

// Create movie

exports.createMovie = async (req, res) => {
    try {
        const movie = await Movie.insertMany(req.body);
        res.status(200).json({ Status: "OK", Message: "Filme criado com sucesso", Infos: movie });
    } catch (err) {
        res.status(404).json({ 
            Status: "Error", Message: "Erro ao criar filme, por favor tente novamente", Error: err.message 
        });
    };
};

// Update movie 

exports.updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({ Status: "OK", Message: "Filme atualizado com sucesso", Infos: movie });
    } catch (err) {
        res.status(404).json({ 
            Status: "Error", Message: "Erro ao atualizar filme, por favor tente novamente", Error: err.message 
        });
    };
};

// Delete movie

exports.deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json({ Status: "OK", Message: "Filme deletado com sucesso" });
    } catch (err) {
        res.status(404).json({ 
            Status: "Error", Message: "Erro ao deletar filme, por favor tente novamente", Error: err.message 
        });
    };
};

// Find movie

exports.findMovie = async (req, res) => {
    try {
        const movie = await Movie.find();
        res.status(200).json({ Status: "OK", Message: "Filmes encontrados com sucesso", Infos: movie });
    } catch (err) {
        res.status(404).json({ 
            Status: "Error", Message: "Erro ao procurar filmes, por favor tente novamente", Error: err.message 
        });
    };
};