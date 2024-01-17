array = [4,5,6,7,8,9,10]

array.forEach((nro) => {
    console.log(nro + ' => '+ (nro%2==0?'par':'impar'))
})

nroDivisores = (nro) => {
    let ndiv = 0
    for(let divisor=1; divisor<=nro; divisor++) {
        if((nro%divisor) == 0) {
            ndiv++
        }
    }
    return ndiv
}

array.forEach(
        (nro) => console.log(nro + ' => ' + (nroDivisores(nro)==2?'primo':'composto')))

        array.forEach(
            (nro) => console.log(nro+
                                `-> nDivisores de 1 até ${nro} =`+
                                 nroDivisores(nro) )
        )