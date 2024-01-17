import {CarroComPlaca} from './06a_CarroComPlaca.mjs'
import {Locadora} from './06a_Locadora.mjs'

var locadora = new Locadora()
locadora.adicionarCarro(new CarroComPlaca("ABC-1234"))
locadora.adicionarCarro(new CarroComPlaca("DEF-5678"))

locadora.consultarCarro()

locadora.abasteceCarro(0, 10)
locadora.abasteceCarro(1, 20)

locadora.consultarCarro()
