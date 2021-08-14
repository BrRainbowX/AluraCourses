import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0
    _agencia = null
    _cliente = null

    _saldo = 0

    constructor(cliente, agencia) {
        this.agencia = agencia
        this.cliente = cliente
        ContaCorrente.numeroDeContas += 1
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente)
            this._cliente = novoValor
        else console.warn('Client show be an instance of Cliente.')
    }

    set agencia(agencia) {
        const reg = new RegExp(/^[0-9]{4}$/)
        if (reg.test(agencia))
            this._agencia = agencia
        else console.warn('Wrong agency code.')
    }

    get agencia() {
        return this._agencia
    }

    get cliente() {
        return this._cliente
    }

    get saldo() {
        return this._saldo
    }

    sacar(valor) {
        if (this._saldo < valor) return;
        this._saldo -= valor
        return valor
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valor)
    }
}