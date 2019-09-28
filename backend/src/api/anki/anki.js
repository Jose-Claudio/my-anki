// 5 - CRIAR O ESQUEMA DO BANCO DE DADOS
const restful = require('node-restful')
const mongoose = restful.mongoose


const cardSchema = new mongoose.Schema({
    front: { type: String, required: true },
    back: { type: String, required: true }
})

const deckSchema = new mongoose.Schema({
    deckName: { type: String, required: true },
    cards: [cardSchema] 
})

module.exports = restful.model('Anki', deckSchema)