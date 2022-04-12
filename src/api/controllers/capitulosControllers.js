const Capitulos = require('../models/capitulosModels.js');
const Livros = require('../models/livrosModels.js');

module.exports = {
    async indexAll(req, res) {
        const capitulo = await Capitulos.findAll();
        return res.json(capitulo)
    },
    
    async index(req, res){
        const { livro_id } = req.params
        console.log('Parametro livro esperado ' + livro_id)

        const capitulo = await Livros.findByPk(livro_id, {
            include: { association: 'livro'}
        })
        return res.json(capitulo)
    },
    
    async store(req, res) {
        const { livro_id } = req.params
        const { capi_titulo, capi_enredo, capi_pag } = req.body

        console.log('Parametro esperado: ' + livro_id)
        console.log('Dados: ' + req.body)

        const livro = await Livros.findByPk(livro_id) 

        if(!livro) {
            return res.status(400).json({error: 'Capitulo nao encontrado!!!'})
        }

        const capitulo = await Capitulos.create({
            capi_titulo, capi_enredo, capi_pag, livro_id
        });
        return res.json(capitulo);
    },
    
    async update(req, res) {
        const { capi_titulo, capi_enredo, capi_pag } = req.body;
        const { capitulo_id } = req.params; 
        await Capitulos.update({ capi_titulo, capi_enredo, capi_pag }, { 
            where: {
            id: capitulo_id
            }
        });
        return res.status(200).send({
            status: 1,
            message: "Capitulos atualizado com sucesso!!!",
        })
    },
    
    async delete(req, res) {
        const { capitulo_id } = req.params;
        const capitulo = await Capitulos.findByPk(capitulo_id)

        if(!capitulo) {
            return res.status(400).json({error: "capitulo não encontrado!!!"})
        } else {
            console.log("capitulo encontrado")
        }
        
        await Capitulos.destroy({
            where: {
                id: capitulo_id
            }
        });
        
        return res.status(200).send({
            status: 1,
            message: "Capitulos excluido com sucesso!!!",
        })
    }
}