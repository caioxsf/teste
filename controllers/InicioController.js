const inicioModel = require("../models/inicioModel");

class InicioController {

    async inicioView (req,res) {
        let listarTudo = new inicioModel();
        listarTudo = await listarTudo.listar();

        res.render('inicio', {lista: listarTudo})
    }

    async inicio (req,res) {
        let ok;

        if(req.body.nome && req.body.email) {
            let cadastrarNome = new inicioModel();
            cadastrarNome.nome = req.body.nome;
            cadastrarNome.email = req.body.email;

            let resultado = await cadastrarNome.cadastrar();

            if(resultado) {
                res.send({ok: true, msg: 'Cadastro realizado com sucesso!'})
            }
            else {
                res.send({ok: false, msg: 'Erro ao realizar cadastrado!'})
            }
        }
    }

    async excluir (req,res) {
        let ok;
        let id = req.params.id;
        let excluirNome = new inicioModel();
        let resultado = await excluirNome.excluir(id);
        
        if(resultado) {
            res.send({ok: true, msg: 'Pessoa excluida com sucesso!'})
        }
        else {
            res.send({ok: false, msg: 'Erro ao excluir pessoa!'})
        }
    }

    async editarView (req,res) {
        // let listarTudo = new inicioModel();
        // listarTudo = await listarTudo.listar();
        let id = req.params.id;
        let inicio = new inicioModel();
        inicio = await inicio.obter(id);

        res.render('inicio', {nomeEdicao: inicio});



        res.render('inicio')
    }


}

module.exports = InicioController;