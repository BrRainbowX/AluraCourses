import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente('Marco', '632.443.582-25')
const cliente2 = new Cliente('Sabrina', '456.242.134-76')

const conta1 = new ContaCorrente(cliente1, '0001')
const conta2 = new ContaCorrente(cliente2, '0001')

conta1.depositar(8000)
conta1.sacar(200)
conta1.transferir(800, conta2)
conta2.depositar(200)

console.log(conta1)
console.log(conta2)
console.log(`Number of accounts: ${ContaCorrente.numeroDeContas}`)


