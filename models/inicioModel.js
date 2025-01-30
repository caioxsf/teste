const Database = require('../utils/database');
const db = new Database();

class inicioModel {

    #id
    #nome
    #email

    constructor (id,nome,email) {
        this.#id = id;
        this.#nome = nome;
        this.#email = email;
    }

    get id () {
        return this.#id;
    }
    set id (value) {
        this.#id = value;
    }

    get nome () {
        return this.#nome;
    }
    set nome (value) {
        this.#nome = value;
    }

    get email () {
        return this.#email;
    }
    set email (value) {
        this.#email = value;
    }

    async cadastrar () {
        let sql = `insert into pessoa (pes_nome, pes_email) values (?,?)`;
        let valores = [this.#nome, this.#email];
        let resultado = await db.ExecutaComandoNonQuery(sql,valores);
        return resultado;
    }

    async listar () {
        let sql = `select * from pessoa`;

        let resultado = await db.ExecutaComando(sql);
        let listaCadastro = [];
        for(let registro of resultado) {
            listaCadastro.push(new inicioModel(
                registro['pes_id'],
                registro['pes_nome'],
                registro['pes_email']
            ));
        }
        return listaCadastro;
    }

    async excluir (id) {
        let sql = `delete from pessoa where pes_id = ?`;
        let valores = [id];
        let resultado = await db.ExecutaComandoNonQuery(sql,valores);
        return resultado;
    }

    async obter (id) {
        let sql = `select * from pesssoa where pes_id = ?`;
        let valores = [id];

        let row = await db.ExecutaComando(sql,valores);

        if(row.length > 0) {
            return new inicioModel(
                row[0]['pes_id'],
                row[0]['pes_nome'],
                row[0]['pes_email']
            )
        }
        return null
    }

}

module.exports = inicioModel;