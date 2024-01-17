let pessoa = {
    nome: 'Marcos Alexandre',
    idade: 32
}

let {
    idade: aIdade,
    peso: oPeso = 72
} = pessoa

console.log("O nome e: " + pessoa.nome)
console.log("A idade e: " + pessoa.idade)
console.log("O peso e: " + pessoa.peso)