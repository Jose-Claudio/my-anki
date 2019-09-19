// 6 - CRIAR A API REST
const Anki = require('./anki')

Anki.methods(['get', 'post', 'put', 'delete'])
Anki.updateOptions({new: true, runValidators: true})

module.exports = Anki