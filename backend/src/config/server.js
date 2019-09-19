// 2 - CONFIGURANDO O SERVIDOR COM EXPRESS
// 10 - IMPORTAR O AQUIVO CORS.JS E ATRIBUIR AO SERVER
const port = 3003

const bodyPaser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('./cors')

server.use(bodyPaser.urlencoded({ extended: true }))
server.use(bodyPaser.json())
server.use(cors)

server.listen(port, () => {
    console.log(`BACKEND  is runnig on port ${port}`)
})

module.exports = server