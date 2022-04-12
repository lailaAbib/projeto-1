
const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const conexao = new Sequelize(dbConfig)

const livros = require('../api/models/livrosModels.js')
const capitulos = require('../api/models/capitulosModels')

// const capitulos = require('.../api/models/capitulosModels.js')

try {
    conexao.authenticate();
    console.log('Conexão estabelecida!')
} catch (error) {
    console.log('Conexão não estabelecida!')
}

livros.init(conexao)
capitulos.init(conexao)

livros.associate(conexao.models)
capitulos.associate(conexao.models)

module.exports = conexao;