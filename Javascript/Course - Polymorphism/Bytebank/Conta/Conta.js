export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error('You should not initialize a object of type Conta.')   
        }
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

    get cliente() {
        return this._cliente
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente)
            this._cliente = novoValor
        else console.warn('Client show be an instance of Cliente.')
    }

    get agencia() {
        return this._agencia
    }

    set agencia(agencia) {
        const reg = new RegExp(/^[0-9]{4}$/)
        if (reg.test(agencia))
            this._agencia = agencia
        else console.warn('Wrong agency code.')
    }

    get saldo() {
        return this._saldo
    }

    sacar(valor) {
        throw new Error('Sacar from Conta is a abstract method.')
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if (valorSacado <= this._saldo) {
            this._saldo -= valorSacado
            return valorSacado
        }
        return 0
    }

    depositar(valor) {
        if (valor <= 100) return;
        this._saldo += valor
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valor)
    }
}