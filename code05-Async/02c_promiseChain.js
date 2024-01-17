const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Pedido com sucesso!!!!!!!!!!!!!!')
    }, 2000)
}) 

promise 
    .then(
        result => { 
            console.log(result);
            return 'valor' },
        )
    .then(
        result => 
            console.log(result)
        )
    .catch(
        error => console.log(error)
    )

    console.log('Finished!')