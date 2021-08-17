import { SistemaAutenticacao } from './SistemaAutenticacao.js'
import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { Diretor } from './Funcionarios/Diretor.js'
import { Gerente } from './Funcionarios/Gerente.js'

const diretor = new Diretor('Marco', 15000, '632.443.582-25')

diretor.cadastrarSenha('1234')

const gerente = new Gerente('Sabrina', 10000, '632.443.582-25')

gerente.cadastrarSenha('1234')

const cliente1 = new Cliente('Marco', '632.443.582-25', '123')
const cliente2 = new Cliente('Sabrina', '456.242.134-76', '123')

const diretorLogado = SistemaAutenticacao.login(diretor, '1234')
const gerenteLogado = SistemaAutenticacao.login(gerente, '1234')
const clienteLogado = SistemaAutenticacao.login(cliente1, '123')

console.log(diretorLogado, gerenteLogado, clienteLogado)

console.log(`Number of accounts: ${ContaCorrente.numeroDeContas}`)


