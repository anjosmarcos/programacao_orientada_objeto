function potencia(base, expoente = 2) {
    let resultado = 1
    for (let cont = 0; cont < expoente; cont++) {
        resultado *= base
    }
    return resultado
}

console.log(potencia()) // NAN
console.log(potencia(4))
console.log(potencia(2,6))
console.log(potencia(2,6,18)) // irá ignorar outros valeres que passar como ref.

