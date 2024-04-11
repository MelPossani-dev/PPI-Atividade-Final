import secretariaDAO from "../Persistencia/secretariaDAO.js";

export default class Secretarias{
    #id;
    #setor;
    #nome_secretaria;
    #titular;
    #cpf;
    constructor({id, setor, nome_secretaria, titular, cpf}){
        this.#id = id;
        this.#setor = setor;
        this.#nome_secretaria = nome_secretaria;
        this.#titular = titular;
        this.#cpf = cpf;   
    }

    get id(){
        return this.#id;
    }
    set id(new_id){
        this.#id = new_id;
    }

    get setor(){
        return this.#setor;
    }
    set setor(new_setor){
        this.#setor = new_setor;
    }   

    get nome_secretaria(){
        return this.#nome_secretaria;
    }
    set nome_secretaria(new_nome_secretaria){
        this.#nome_secretaria = new_nome_secretaria;
    }

    get titular(){
        return this.#titular;
    }
    set titular(new_titular){
        this.#titular = new_titular;
    }

    get cpf(){
        return this.#cpf;
    }
    set cpf(new_cpf){
        this.#cpf = new_cpf;
    }
    async gravar(){
        const dao = new secretariaDAO();
        await dao.gravar(this);
    }
    async atualizar(){
        const dao = new secretariaDAO();
        await dao.atualizar(this);
    }
    async excluir(){
        const dao = new secretariaDAO();
        await dao.excluir(this);
    }
    async consultar(termoDePesquisa){
        const dao = new secretariaDAO();
        return await dao.consultar(termoDePesquisa);
    }


    toString(){
        return JSON.stringify(this);
    }
    toJSON(){
        return{
            id: this.id,
            setor: this.setor,
            nome_secretaria: this.nome_secretaria,
            titular: this.titular,
            cpf: this.cpf
        }
    }
}