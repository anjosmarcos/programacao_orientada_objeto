const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('Success!')
    }, 2000)
})

myFirstPromise.then((successMessage) => {
    console.log('Yay! ' + successMessage)
})

console.log('Finished!')