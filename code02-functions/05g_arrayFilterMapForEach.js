array = [2,3,4,5,6,7,8,9,10]

nroDivisores = (item) => {
    let ndivisores = 0
    for(let divisores=1; divisores<=item; divisores++) {
        if((item%divisores) == 0) {
            ndivisores++
        }
    }
    return ndivisores
}

array
    .filter((nro) => nroDivisores(nro)==2)
    .map((item) => {
        return {
            x: item,
            par: (item%2)==0
        }
    })
    .forEach((obj) => {
        console.log(obj.x + " é par? " + obj.par)
    })