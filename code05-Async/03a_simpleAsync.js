async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve ('Pedido com sucesso'), 2000);
    })

    let result = await promise; // wait until the promise resolves (*)
    return result;
}

console.log("Iniciando o programa")
console.log(fazAlgo())
console.log("Finalizando o programa")