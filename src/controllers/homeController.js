const Contato  = require('../models/ContatoModel');

exports.index = async (req, res) => {
    const searchQuery = req.query.search || '';
    let contatos = {};
    let pesquisa = false;

    try {
        if(searchQuery) {
            contatos = await Contato.buscaContatosPorNome(searchQuery);
            pesquisa = true;
        } else {
            contatos = await Contato.buscaContatos();
        }
        
    } catch (error) {
        console.log('Erro ao buscar contatos: ', error);
    }
    res.render('index', { contatos , pesquisa, csrf: req.csrfToken()});
};