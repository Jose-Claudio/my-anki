// 3 - CONFIGURANDO O MOGOOSE 
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/anki', { useNewUrlParser: true, useUnifiedTopology: true })