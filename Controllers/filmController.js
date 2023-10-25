
//appel du modèle:
const films = require('../Model/films.js')

// affiche ensemble des questions
const getfilms = (req,res)=>{
    films.find()
    .then(films => res.status(200).json(films))
    .catch(err => res.status(404).json({notFound:'films non trouver'}))
}

const addfilms = (req,res)=>{
    films.create(req.body)
    .then(films => res.status(200).json({result:'film bien ajouté'}))
    .catch(err => res.status(404).json({error:'film non ajouté'}))
}

const deletefilms = (req,res)=>{
    films.findByIdAndRemove(req.params.id,req.body)
    .then(films => res.status(200).json({result:'film bien supprimmée !'}))
    .catch(err => res.status(404).json({error:'Impossible de suprimer !'}))
}
    
module.exports = { getfilms, addfilms, deletefilms }