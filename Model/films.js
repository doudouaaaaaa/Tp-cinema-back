const mongoose = require('mongoose');

const filmsSchema = new mongoose.Schema({
    titre: {
        type: String,
    },
    description:{
        type: String
    },
    acteur_principaux:{
        type: String
    },
    réalisateur: {
        type: String,
    },
    date_de_sortie: {
        type: Date,
    },
    genre: {
        type: String,
    },
    durée: {
        type: String,
    }

})

module.exports = films = mongoose.model('films', filmsSchema, 'films')