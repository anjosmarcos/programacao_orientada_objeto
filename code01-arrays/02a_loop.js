var a = []

a[0] = Math.random()
a[1] = Math.random()
a[2] = Math.random()

console.log(a.length)
console.log(' -for .. in -')
console.log('--------------------------------')
for (let val in a) {
    console.log(" --> " + val)
}

console.log('--------------------------------')
console.log(' -for .. of -')
for (let val of a) {
    console.log(" --> " + val)
}

console.log('--------------------------------')
console.log(' -for (; ;) -')
console.log('--------------------------------')
for(let i=0; i<a.length; i++) {
    console.log(' --> ' + a[i])
}