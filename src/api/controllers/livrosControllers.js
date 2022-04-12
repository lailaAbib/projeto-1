const Livros = require('../models/livrosModels.js');

module.exports = {
    async indexAll(req, res) {
        const livro = await Livros.findAll();
        return res.json(livro)
    },
    
    async store(req, res) {
        const { liv_titulo, liv_editora, liv_ano } = req.body; 
        const livro = await Livros.create({ liv_titulo, liv_editora, liv_ano });
        return res.status(200).send({
            status: 1,
            message: "Livros cadastrado com sucesso!!!",
            livro
        })
    },
    
    async update(req, res) {
        const { liv_titulo, liv_editora, liv_ano } = req.body;
        const { livro_id } = req.params; 
        await Livros.update({   liv_titulo, liv_editora, liv_ano }, { 
            where: {
            id: livro_id
            }
        });
        return res.status(200).send({
            status: 1,
            message: "Livros atualizado com sucesso!!!",
        })
    },
    
    async delete(req, res) {
        const { livro_id } = req.params;
        await Livros.destroy({
            where: {
                id: livro_id
            }
        });
        return res.status(200).send({
            status: 1,
            message: "Livros excluido com sucesso!!!",
        })
    }
}