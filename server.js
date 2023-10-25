//dépendances

const express = require('express');
const app = express()
let cors = require ('cors')

app.get('/Film', (req,res)=>{
    res.send("Liste des films")
})

//middlewares
app.use(express.json())
app.use (cors())

// Routers
const filmRoute = require('./Routes/filmRoute.js');
const connectDatabase = require('./Databse/connextion.js');

// connection database
connectDatabase()

// utiliser les routes
app.use('/fims', filmRoute)

 // lancement du serveur
app.listen(8080, ()=>{
    console.log('serveur ouvert port 8080')
})






