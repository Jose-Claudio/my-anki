// 7 - MAPEAMENTO DAS ROTAS
const express = require('express')

module.exports = function(server){

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // ANKI Routes
    const ankiService = require('../api/anki/ankiService')
    ankiService.register(router, '/decks')
}