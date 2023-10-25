const mongoose = require('mongoose');
const Databse = process.env.ATLAS_URL;
require('dotenv').config()

const connectDatabase = async() =>{
    try{
        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.ATLAS_URL)
        console.log("connexion réussit")
    }
   catch(err){
        console.log(err.message);
        process.exit(1);
   }
    
}

module.exports = connectDatabase