async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve ('Pedido com sucesso'), 2000);
    })

    let result = await promise; // wait until the promise resolves (*)
    return result;
}

async function main() {
    console.log("Iniciando o programa")
    console.log(await fazAlgo())
    console.log("Finalizando o programa")
}

main()