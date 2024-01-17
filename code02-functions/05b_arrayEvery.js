array = [4,5,6,7,8,9,10]

regraImpar = (item) => item%2 != 0
console.log('Todos os numeros sao impares? '+ array.every(regraImpar))

regraPrimo = (item) => {
    let ndiv = 0
    for(let divisor in item) {
        if((item%divisor) == 0) {
            ndiv++
        }
    }

    if(ndiv == 2) 
        return true
    else 
        return false
}

console.log('Todos os numeros sao primos? ' + array.every(regraPrimo))
