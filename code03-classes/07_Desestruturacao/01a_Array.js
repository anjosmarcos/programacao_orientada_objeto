var nomeCompleto = ['Marcos', 'Alexandre', 'dos Anjos']
var [primeiroNome, segundoNome, terceiroNome] = nomeCompleto

console.log(`Primeiro nome: ${primeiroNome}`)
console.log(`Segundo nome: ${segundoNome}`)
console.log(`Terceiro nome: ${terceiroNome}`)

var [primeiroNome, ...restante] = nomeCompleto
console.log(`Primeiro nome: ${primeiroNome}`)
console.log(`Restante: ${restante}`)
console.log(`Restante: ${restante.toString().replace(',', ' ')}`)

var [soOprimeiroNome, soOultimoNome] = nomeCompleto
console.log(`Primeiro nome: ${soOprimeiroNome}`)
console.log(`Último nome: ${soOultimoNome}`)