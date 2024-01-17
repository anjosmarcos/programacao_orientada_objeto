async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve ('Pedido com sucesso'), 2000);
    })

    let result = await promise; // wait until the promise resolves (*)
    return result;
}

console.log("Iniciando o programa")
fazAlgo().then(result => console.log(result))
console.log("Finalizando o programa")