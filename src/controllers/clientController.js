const Client = require('../models/client');

// Create client

exports.createClient = async (req, res) => {
    try {
        const client = await Client.insertMany(req.body);
        res.status(200).json({ Status: "OK", Message: "Cliente criado com sucesso", Infos: client });
    } catch (err) {
        res.status(404).json({ 
            Status: "Error", Message: "Erro ao criar cliente, por favor tente novamente", Error: err.message 
        });
    };
};

// Update client 

exports.updateClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({ Status: "OK", Message: "Cliente atualizado com sucesso", Infos: client });
    } catch (err) {
        res.status(404).json({ 
            Status: "Error", Message: "Erro ao atualizar cliente, por favor tente novamente", Error: err.message 
        });
    };
};

// Delete client

exports.deleteClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndDelete(req.params.id);
        res.status(200).json({ Status: "OK", Message: "Cliente deletado com sucesso" });
    } catch (err) {
        res.status(404).json({ 
            Status: "Error", Message: "Erro ao deletar cliente, por favor tente novamente", Error: err.message 
        });
    };
};

// Find clients

exports.findClient = async (req, res) => {
    try {
        const client = await Client.find();
        res.status(200).json({ Status: "OK", Message: "Clientes encontrados com sucesso", Infos: client });
    } catch (err) {
        res.status(404).json({ 
            Status: "Error", Message: "Erro ao procurar clientes, por favor tente novamente", Error: err.message 
        });
    };
};