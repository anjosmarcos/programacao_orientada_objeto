const myFirstPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject('Failure!')
    }, 2000)
})

let ifFail = (failureMessage) => {
    console.log('Boo! ' + failureMessage)
}

myFirstPromise
    .then(
    null, 
    (msg) => {
        throw "Erro: " + msg
    })
    .catch(ifFail)

console.log('Finished!')

