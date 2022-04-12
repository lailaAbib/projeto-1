const express = require('express')
const http = require('http')

require('./src/database/indexDb.js');

// instanciar o express
const app = express();

app.use(express.json())

const indexRoutes = require('./src/api/routes/indexRoutes.js')
const livrosRoutes = require('./src/api/routes/livrosRoutes.js')
const capitulosRoutes = require('./src/api/routes/capitulosRoutes.js')

app.use(indexRoutes)
app.use(livrosRoutes)
app.use(capitulosRoutes)

// Configurar a porta e url para execução do aplicativo
app.set('url', 'http://localhost:')
app.set('porta', 3006);

http.createServer(app).listen(app.get('porta'), function(){
    console.log('Servidor rodando na porta: '+app.get('url') +app.get('porta'))
})

module.exports = app;