var a = []
a[0] = Math.random()
console.log(a.length)

for(let val in a) {
    console.log(' --> ' +val)
}

console.log('--------------------------------')

a.push(Math.random())
console.log(a.length)
for(let val in a) {
    console.log(' --> ' +val)
}

console.log('--------------------------------')

a[9] = Math.random()
console.log(a.length)
for(let val in a) {
    console.log(' --> ' +val)
}

console.log('--------------------------------')

console.log('Usando FOR IN omite as posição vazia do array')
for(let val in a) {
    console.log(`a[${val}] = ${a[val]}`)
}

console.log('--------------------------------')

console.log('Usando FOR OF não omite as posição vazia do array')
for(let val of a) {
    console.log(`a[${val}] = ${val}`)
}