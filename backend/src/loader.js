// 1 - CRIAR O ARQUIVO LOADER.JS
// 4 - IMPORTAR O AQUIVO DATABASE.JS
// 8 - IMPORTAR O AQUIVO ROUTES.JS E CRIAR A VARIAVEL SERVER
const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)