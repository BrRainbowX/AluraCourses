export class Cliente {
    nome
    _cpf

    constructor(nome, cpf, senha) {
        this.nome = nome
        this.cpf = cpf
        this._senha = senha
    }

    get cpf() {
        return this._cpf
    }

    set cpf(cpf) {
        const reg = new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)
        if(reg.test(cpf)) 
            this._cpf = cpf
        else console.warn(`This ${cpf} is not a CPF.`)
    }

    autenticar(senha) {
        return this._senha == senha
    }
}